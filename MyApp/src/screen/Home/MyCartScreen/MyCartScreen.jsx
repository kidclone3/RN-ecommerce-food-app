import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    FlatList,
    Dimensions,
} from 'react-native';
import React from 'react';
import { Icon, Button, Image, ListItem } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { SIZES, COLORS, images } from '../../../constants';
import { listUserCart } from '../../../services/carts';
import SwipeableItem from '../../../components/Button/SwipeableItem';
import EmptyCart from '../../../components/Button/EmptyCart';
import PlaceOrder from '../../../components/Button/PlaceOrder';

const MyCartScreen = ({ navigation }) => {
    const [isEmpty, setIsEmpty] = React.useState(false);
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        listUserCart()
            .then((res) => {
                if (res.length === 0) {
                    setIsEmpty(true);
                } else {
                    setData(res[0]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    console.log('!here1 ' + JSON.stringify(data));
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
    
    function listOrdered() {
        return (
            <View style={styles.containerSwipeable}>
                <FlatList
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({item}) => (
                      // console.log('!here2 ' + JSON.stringify(item.product))
                        <SwipeableItem
                            cartId={item.id}
                            name={item.product.name}
                            price={item.product.price}
                            image={item.product.image}
                            quantity={item.quantity}
                            // distance={item.distance}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                />
                <PlaceOrder />
            </View>
        );
    }
    return (
        <SafeAreaView>
            {CartHeader()}
            {isEmpty ? <EmptyCart/> : listOrdered()}
        </SafeAreaView>
    );
};

export default MyCartScreen;

const styles = StyleSheet.create({
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
});
