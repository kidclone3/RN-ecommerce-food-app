import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Card, Dialog } from '@rneui/themed';
import { detailUserOrder } from '../../services/orders';
import ProductItem from '../ProductItem';
import { SIZES, COLORS } from '../../constants';

const OrderList = ({orderId, total_price}) => {
    const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [item, setItem] = React.useState({});
    const [dataLength, setDataLength] = React.useState(0);
    React.useEffect(() => {
        setLoading(true);
        const tmp = detailUserOrder(orderId);
        tmp.then((res) => {
            setData(res);
            setDataLength(res.item.length);
            setItem(res.item[0]);
            console.log("data ", JSON.stringify(data));
        }).catch((err) => {
            console.log("err item ", JSON.stringify(err));
        });
        setTimeout(() => 
            setLoading(false)
        , 1000);
        return () => {
        }
    }, [])
  return (
      loading ? <Dialog.Loading /> : (
    <View>
        <Card>
            {/* <Text> {JSON.stringify(item)} </Text> */}
            <ProductItem 
                itemName={item?.product_name}
                itemId = {item?.product?.id}
                itemPrice={item?.price}
                // itemImage={item.image}
                itemQuantity={item?.quantity}
                itemUnit = {item?.unit}
                nonPressable = {true}
            />
        
        <Card.Divider />
        <View style={{flexDirection: "row", justifyContent: "flex-end", alignItems:"baseline"}}>
            {dataLength> 1 &&(<Text style={{fontSize: SIZES.h5, color: COLORS.darkgray, justifyContent:'flex-start'}}>{dataLength-1} sản phẩm </Text>)}
            <Text style={{fontSize: SIZES.h4, fontWeight: "bold"}}>Thành tiền: </Text>
            <Card.Title style={styles.total_price}> {parseInt(total_price).toLocaleString('vi-VN',{style:'currency', currency:'VND'})} </Card.Title>
        </View>
        </Card>
    </View>

        )
  )
}

export default OrderList

const styles = StyleSheet.create({
    total_price: {
        textAlign: "right",
        fontSize: SIZES.h4,
        fontWeight: "bold",
        color: COLORS.primary,
    }
})