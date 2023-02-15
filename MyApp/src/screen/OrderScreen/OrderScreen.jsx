import { StyleSheet, Text, View, FlatList, ScrollView, RefreshControl } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Icon, Avatar, Tab, Dialog } from '@rneui/themed';
import { COLORS, SIZES, FONTS } from '../../constants';
import EmptyCart from '../../components/Button/EmptyCart';
import {listUserOrder } from '../../services/orders';
import OrderList from '../../components/OrderList';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const OrderScreen = ({ navigation }) => {
    const [loading, setLoading] = React.useState(false);
    const [refreshing, setRefreshing] = React.useState(false);
    const avatar =
        'https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F018%2F385%2FRs_634x1024-130605092844-634.DespMe2.mh.060513.jpg';

    function Header() {
        return (
            <View style={styles.header}>
                <Avatar
                    rounded
                    size="medium"
                    source={{
                        uri: avatar,
                    }}
                />
                <Text style={styles.headerText}>Orders </Text>
            </View>
        );
    }
    const [OrderedData, setOrderedData] = React.useState([]);
    const [index, setIndex] = React.useState(0);
    const status = {"ACTIVE":"","COMPLETED":"đã nhận","CANCELLED":"đã hủy"}
    const [activeOrder, setActiveOrder] = React.useState([]);
    const [completedOrder, setCompletedOrder] = React.useState([]);
    const [cancelledOrder, setCancelledOrder] = React.useState([]);

    
      
    const [routes] = React.useState([
        { key: 'first', title: 'Active' },
        { key: 'second', title: 'Complete' },
        { key: 'third', title: 'Cancel' },
      ]);

    React.useEffect(() => {
        setLoading(true);
        const tmp = listUserOrder();
        tmp.then((res) => {
            setOrderedData(res);
            console.log("res ",JSON.stringify(OrderedData))
        });
       
        setTimeout(() => setLoading(false), 1000);
        return () => {};
    }, []);
    React.useEffect(() => {
        setLoading(true);
        if (OrderedData.data == undefined) return;
        setActiveOrder(OrderedData.data.filter((item) => item.status != status["COMPLETED" && item.status != status["CANCELLED"]]));
        setCompletedOrder(OrderedData.data.filter((item) => item.status == status["COMPLETED"]));
        setCancelledOrder(OrderedData.data.filter((item) => item.status == status["CANCELLED"]));
        setTimeout(() => setLoading(false), 1000);
        return () => {};
    }, [OrderedData]);
    function RenderProductList({orderState}) {
        
        const renderItem = ({ item }) => {
            return (
                <View>
                    <OrderList orderId = {item.id} total_price = {item.total_price}/>
                </View>
            );
        };
        
        function chooseData(orderState){
            if (OrderedData.data == undefined) return (<Text> BUG </Text>);
            if (orderState == "ACTIVE") return (
                activeOrder?.length == 0 ? (
                    <EmptyCart style={styles.emptyCart} />
                ) : (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    // data={(orderState) => {if (orderState == "ACTIVE") return activeOrder; else if (orderState == "COMPLETED") return completedOrder; else return cancelledOrder;}}
                    data={activeOrder}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{
                        paddingVertical: SIZES.padding * 2,
                        padding: SIZES.padding * 2,
                        rowGap: SIZES.padding * 2,
                        width: '100%',

                    }}
                />)
            );
            else if (orderState == "COMPLETED") return (
                completedOrder?.length == 0 ? (
                    <EmptyCart style={styles.emptyCart} />
                ) : (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={completedOrder}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{
                        paddingVertical: SIZES.padding * 2,
                        padding: SIZES.padding * 2,
                        rowGap: SIZES.padding * 2,
                        width: '100%',

                    }}
                />)
            );
            else return (
                cancelledOrder?.length == 0 ? (
                    <EmptyCart style={styles.emptyCart} />
                ) : (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={cancelledOrder}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{
                        paddingVertical: SIZES.padding * 2,
                        padding: SIZES.padding * 2,
                        rowGap: SIZES.padding * 2,
                        width: '100%',

                    }}
                />
                )
            );
        }
        return loading ? (
            <Dialog.Loading />
        ) : (
            (
                <SafeAreaView>
                    {/* <Text> {JSON.stringify(activeOrder)} </Text> */}
                    {chooseData(orderState)}
                </SafeAreaView>
            ) 
        );
    }
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
        setRefreshing(false);
        }, 1000);
    }, []);

    const Active = () => (
        <View style={{ flex: 1}} >
            <RenderProductList orderState = "ACTIVE"/>
        </View>

    );
    
    const Complete = () => (
    <View style={{ flex: 1}} >
        <RenderProductList orderState = "COMPLETED"/>
    </View>
    );
    const Cancel = () => (
    <View style={{ flex: 1}} >
        <RenderProductList orderState = "CANCELLED"/>
    </View>
    );
    
    const renderScene = SceneMap({
        first: Active,
        second: Complete,
        third: Cancel,
    });
    return (
        <SafeAreaView style={styles.root}>
            <Header />
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: SIZES.width, height: SIZES.height }}
                renderTabBar={(props) => (
                    <TabBar
                        {...props}
                        indicatorStyle={styles.TabIndicator}
                        style={{ backgroundColor: 'transparent' }}
                        labelStyle={styles.TabTitle}
                        activeColor={COLORS.primary}
                        inactiveColor={COLORS.darkgray}
                        />
                )}
            />
        </SafeAreaView>
    );
};

export default OrderScreen;

const styles = StyleSheet.create({
    root: {
        backgroundColor: COLORS.white,
        width: '100%',
        height: '100%',
    },
    header: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
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
    TabTitle: {
        color: COLORS.darkgray,
    },
    TabIndicator: {
        backgroundColor: COLORS.primary,
    },
    emptyCart: {
        //    height: '80%'
    },
    TabView: {
        justifyContent: 'center',
    },
});
