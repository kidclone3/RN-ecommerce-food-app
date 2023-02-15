import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { useOrderListManager } from '../../hooks/useOrderListManager';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Icon, Avatar, TabView, Tab, Dialog } from '@rneui/themed';
import { COLORS, SIZES, FONTS } from '../../constants';
import EmptyCart from '../../components/Button/EmptyCart';
import { getProducts } from '../../services/products';
import ProductItem from '../../components/ProductItem';
import { listUserOrder } from '../../services/orders';

const OrderScreen = ({ navigation }) => {
    // const hook = useOrderListManager();
    const [loading, setLoading] = React.useState(false);
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
    function renderProductList({orderState="ACTIVE"}) {
        const [data, setData] = React.useState([]);
        
        let loaded = true;
        const status = {"ACTIVE":"","COMPLETED":"đã nhận","CANCELLED":"đã hủy"}
        React.useEffect(async () => {
            setLoading(true);
            let loaded = true;
            getProducts().then((res) => {
                if (loaded) {
                    setData(res.data);
                }
                // console.warn(JSON.stringify(data));
                // console.warn(data.length())
            });
            setLoading(false);
            return;
        }, []);
        const renderItem = ({ item }) => {
            return (
                <ProductItem
                    itemId={item.id}
                    itemName={item.attributes.name}
                    itemPrice={item.attributes.price}
                    itemImage={
                        item.attributes.image.data[0].attributes.url
                    }
                    orderState={orderState}
                />
            );
        };
        return loading ? (
            <Dialog.Loading />
        ) : (
            <View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{
                        paddingVertical: SIZES.padding * 2,
                        padding: SIZES.padding * 2,
                    }}
                />
            </View>
        );
    }
    
    function RneTab() {
        const [index, setIndex] = React.useState(0);
        return (
            <>
                <Tab
                    value={index}
                    onChange={setIndex}
                    dense
                    titleStyle={styles.TabTitle}
                    indicatorStyle={styles.TabIndicator}
                >
                    <Tab.Item>Active</Tab.Item>
                    <Tab.Item>Completed</Tab.Item>
                    <Tab.Item>Cancelled</Tab.Item>
                </Tab>
                <TabView
                    value={index}
                    onChange={setIndex}
                    dense
                    titleStyle={styles.TabTitle}
                    indicatorStyle={styles.TabIndicator}
                >
                    <TabView.Item style={{ ...styles.root, ...styles.TabView }}>
                        {/* <EmptyCart /> */}
                        {renderProductList({orderState:"ACTIVE"})}
                    </TabView.Item>
                    <TabView.Item style={{ ...styles.root, ...styles.TabView }}>
                        {/* <EmptyCart /> */}
                        {renderProductList({orderState:"COMPLETED"})}
                    </TabView.Item>
                    <TabView.Item style={{ ...styles.root, ...styles.TabView }}>
                        {/* <EmptyCart /> */}
                        {renderProductList({orderState:"CANCELLED"})}
                    </TabView.Item>
                </TabView>
            </>
        );
    }

    return (
        <SafeAreaView style={styles.root}>
            <Header />
            {/* <Text>{JSON.stringify(hook)}</Text> */}
            {RneTab()}
            {/* <EmptyCart /> */}
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
