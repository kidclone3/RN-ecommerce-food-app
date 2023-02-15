import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    FlatList,
} from 'react-native';
import React from 'react';
import { Icon, Button, Image, ListItem, CheckBox, Dialog } from '@rneui/themed';
import { SIZES, COLORS, images } from '../../../constants';
import { listUserCart } from '../../../services/carts';
import SwipeableItem from '../../../components/Button/SwipeableItem';
import EmptyCart from '../../../components/Button/EmptyCart';
import PlaceOrder from '../../../components/Button/PlaceOrder';

const MyCartScreen = ({ navigation }) => {
    const [empty, setEmpty] = React.useState(true);
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [dictOrdered, setDictOrdered] = React.useState({});

    React.useEffect(async () => {
      setLoading(true);
      const tmp_data = await listUserCart();
      if (tmp_data) {
        for (i in tmp_data) {
          if (Array.isArray(i)) {
            console.log('!here i ' + JSON.stringify(i));

            setData(i);
            setEmpty(i.length == 0);
          }
        }
      }
      console.log('!here1 ' + JSON.stringify(data));
      setLoading(false);
  }, []);
    // console.log('!here1 ' + JSON.stringify(data));
    function CartHeader() {
        return (
            <View style={styles.header}>
                <Button
                    buttonStyle={{
                        width: 50,
                        height: 50,
                        borderRadius: 100,
                        backgroundColor: 'white',
                    }}
                    icon={
                        <Icon
                            light
                            type="feather"
                            name="arrow-left"
                            size={SIZES.h3}
                        />
                    }
                    onPress={() => navigation.goBack()}
                    size="sm"
                />
                <Text style={styles.headerText}>My Cart</Text>
            </View>
        );
    }
    
    function body() {
        
        return (
          loading? <Dialog.Loading/> : (
            empty ? <EmptyCart/> : (
            <View style={styles.containerSwipeable}>
                <FlatList
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({item}) => (
                        <SwipeableItem
                            cartId={item.id}
                            name={item.product.name}
                            price={item.product.price}
                            image={item.product.image}
                            quantity={item.quantity}
                            listOrdered={dictOrdered}
                            setListOrdered={setDictOrdered}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                />
                {/* {dictToList()} */}
                {/* {console.log("listOrdered " + JSON.stringify(dictOrdered))} */}
                <PlaceOrder dictOrdered={dictOrdered}/>
            </View>
        ))
        );
    }
    return (
        <SafeAreaView style={styles.root}>
            {CartHeader()}
            <EmptyCart style={styles.emptyCart}/>
            {/* {body()} */}
        </SafeAreaView>
    );
};

export default MyCartScreen;

const styles = StyleSheet.create({
    root: {
        backgroundColor: COLORS.white,
        height: '100%',
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        padding: SIZES.h3,
        paddingBottom: 10,
        // height: '10%',
        // width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        padding: 10,
        fontSize: SIZES.h1,
        fontWeight: 'bold',
        flex: 1,
    },
    container: {
        height: '90%',
        width: '100%',
        backgroundColor: COLORS.white,
        // position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
        // flexDirection: 'column',
    },
    containerSwipeable: {
        height: '90%',
        width: '100%',
        backgroundColor: COLORS.white,
        gap: 20,
        // position: 'relative',
        // flexDirection: 'column',
    },
    emptyCart: {
        height: '80%',
    }
});
