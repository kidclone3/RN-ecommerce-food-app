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
import { pickOrder } from '../../../hooks/pickOrder';

const MyCartScreen = ({ navigation }) => {
    const [empty, setEmpty] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const hook = pickOrder();
    const ref = React.useRef([]);
    const ref_price = React.useRef(0);
    React.useLayoutEffect(() => {
        let loaded = true;
        setLoading(true);
        const tmp =  listUserCart();
        tmp.then((res) => {
            console.log("responeEff " + JSON.stringify(res));
            if (loaded) {
                if (!res || res[1]==0) {
                    setEmpty(true);
                }
                setData(res[0]);
            }
            console.log("effect " + JSON.stringify(data));

        });
        setTimeout(() => setLoading(false), 1000);
        console.log("loaded " + loaded);
        
        return () => {
            console.log("isEmpty " + empty);
            loaded = false;
        }
    }, []);
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
            empty ? <EmptyCart style={styles.emptyCart}/> : (
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
                            refs = {ref}
                            refs_price = {ref_price}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                />
                {/* {dictToList()} */}
                {/* {console.log("listOrdered " + JSON.stringify(dictOrdered))} */}
                {/* <PlaceOrder dictOrdered={dictOrdered}/> */}
                <PlaceOrder refs={ref} refs_price = {ref_price}/>
                
            </View>
        ))
        );
    }
    return (
        <SafeAreaView style={styles.root}>
            {CartHeader()}
            {/* <EmptyCart style={styles.emptyCart}/> */}
            {body()}
            
            
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
