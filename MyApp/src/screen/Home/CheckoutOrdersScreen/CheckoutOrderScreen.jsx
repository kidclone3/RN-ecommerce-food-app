import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Icon, ListItem } from '@rneui/themed'
import { COLORS, SIZES } from '../../../constants'
import BoxContainer from '../../../components/BoxContainer'
import { detailUserOrder } from '../../../services/orders'
import ProductItemMinimize from '../../../components/ProductItemMinimize'
import { FlatList } from 'react-native-gesture-handler'
import PlaceOrder from '../../../components/Button/PlaceOrder'
import productDetail from '../../../services/products/ProductDetail'
const CheckoutOrderScreen = ({route, navigation}) => {
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
        const [data, setData] = React.useState([]);
        const [isEmpty, setIsEmpty] = React.useState(true);
        const [loading, setLoading] = React.useState(false);
        const { listId } = route.params
        React.useEffect(() => {
            setLoading(true);
            const listData = listId.map((id) =>
                productDetail(id))
            setData(listData);
            setLoading(false);
            return;
          }, [])
        console.log('!here1 ' + JSON.stringify(data));
        // console.log('!here1 ' + Array.isArray(data.item));
        return (
            <ScrollView style={styles.root}>
                {/* <BoxContainer style={styles.container}>
                    <Text>Deliver TO</Text>
                </BoxContainer> */}
                <BoxContainer style={styles.container}>

                 <Text style={styles.boxHeaderText}>
                    Order summary
                </Text>
                {!isEmpty ? (
                    <FlatList
                        data={data.item}
                        renderItem={({item}) => (
                            <ProductItemMinimize
                                name={item.product_name}
                                id={item.id}
                                price={item.price}
                                quantity={item.quantity}
                            />
                        )}
                        keyExtractor={item => `${item.product_name}`}
                        contentContainerStyle={{
                        }}
                    />
                ) : null}
                </BoxContainer>

                {/* <BoxContainer style={styles.container}>

                <Text>Payment Method</Text>
                </BoxContainer>

                <BoxContainer style={styles.container}>

                <Text>Subtotal + fee | Total</Text>
                </BoxContainer>

                <BoxContainer style={styles.container}>

                <Text> button place order + price</Text>
                </BoxContainer> */}
                <PlaceOrder />

            </ScrollView>
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