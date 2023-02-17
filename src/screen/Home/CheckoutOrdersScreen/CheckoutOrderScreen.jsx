import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, ButtonGroup, Icon, ListItem } from '@rneui/themed'
import { COLORS, SIZES } from '../../../constants'
import BoxContainer from '../../../components/BoxContainer'
import { createUserOrder, detailUserOrder } from '../../../services/orders'
import ProductItemMinimize from '../../../components/ProductItemMinimize'
import { useNavigation } from '@react-navigation/native'
import PlaceOrder from '../../../components/Button/PlaceOrder'
import productDetail from '../../../services/products/ProductDetail'
const CheckoutOrderScreen = ({route}) => {
    const navigation = useNavigation();
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const {ref, ref_price} = route.params;
    // React.useEffect(() => {
    //     setLoading(true);
    //     const tmp = createUserOrder(route.params.ref.current);
    //     tmp.then((res) => {
    //         console.log("STATUS " + res);
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    //     setTimeout(() => setLoading(false), 1000);
    //     return;
    //   }, [])
    function Header() {
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
                <Text style={styles.headerText}>Checkout Orders</Text>
            </View>
        );
    }
    
    function body() {
        
        
        // console.log('!here1 ' + Array.isArray(data.item));
        return (
            <View>
            <Text>Your orders is {parseInt(ref_price.current).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Text>
            <ButtonGroup
                buttons={['Place Order']}
                containerStyle={{ height: 50 }}
                onPress={() => {
                    setLoading(true);
                    const tmp = createUserOrder(ref.current, "aaa", "123456789");
                    tmp.then((res) => {
                        console.log("STATUS " + res);
                        if (res == 0) {
                            setSuccess(true);
                        }
                    }).catch((err) => {
                        console.log(err);
                    });
                    setTimeout(() => setLoading(false), 1000);
                    navigation.navigate("Order")
                    return;
                }}
            />
           </View>
        );
    }
  return (
    <SafeAreaView>
        <Header />
        {body()}
    </SafeAreaView>
  )
}

export default CheckoutOrderScreen

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
    },
    header: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        padding: SIZES.h3,
        paddingBottom: 10,
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
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius3
    },
    boxHeaderText: {
        fontSize: SIZES.h2, 
        alignSelf:'flex-start',
        padding: SIZES.padding*2,
    }
})