import {
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React from 'react';
import { Icon, Button, ListItem, BottomSheet, Image } from '@rneui/themed';
import { COLORS, SIZES, FONTS } from '../../../constants';
import CustomDivider from '../../../components/CustomDivider';
import QuantityButton from '../../../components/Button/QuantityButton';
import productDetail from '../../../services/products/ProductDetail';
import { API_URL } from '../../../services';
import Carousel from 'react-native-snap-carousel';
import { createUserCart } from '../../../services/carts';

const ItemDetailsScreen = ({ route, navigation }) => {
    const { itemId } = route.params;
    const interfaceData = require('../../../../demo-data/itemDetails.json');
    let loaded = true;
    // const {isLoading, data} = React.((id) => {return productDetail(id)})

    const [data, setData] = React.useState(interfaceData);
    React.useEffect(() => {
        productDetail(itemId)
            .then((res) => {
                if (loaded) {
                    setData(res);
                }
                console.log('!here' + JSON.stringify(data));
            })
            .catch((err) => {
                console.log(err);
            });
        return () => {
            loaded = false;
        };
    }, {});
    console.log('!here1' + JSON.stringify(data));
    function _renderItem({ item }) {
        return (
            <View style={styles.slide}>
                <Image
                    source={{
                        uri: API_URL + item,
                        cache: 'only-if-cached',
                    }}
                    style={{
                        width: '100%',
                        minWidth: SIZES.width / 2,
                        height: 400,
                    }}
                />
            </View>
        );
    }
    function addItem({itemId, quantity, setIsVisible}) {
      setIsVisible(false);
      createUserCart(itemId, quantity).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
    }
    function header() {
        return (
            <View>
                <Carousel
                    layout={'default'}
                    data={data.attributes.image.data.map(
                        (item) => item.attributes.url
                    )}
                    sliderWidth={SIZES.width}
                    itemWidth={SIZES.width}
                    renderItem={_renderItem}
                />
            </View>
            // <ImageBackground
            //   source = {{
            //     uri: API_URL+ data.attributes.image.data[0].attributes.url,
            //     cache: 'only-if-cached'
            //   }}
            //   style = {{width: '100%', minWidth:SIZES.width/2, height: 300}}
            // >
            //   <Button
            //     buttonStyle={{
            //       width: 50, height: 50, borderRadius: 100, backgroundColor:'transparent',
            //     }}
            //     icon={
            //         <Icon
            //             light
            //             type='font-awesome'
            //         //     type='feather'

            //             name='arrow-left'
            //             size={SIZES.h3}
            //             color='white'
            //         />
            //     }
            //     containerStyle={{position: 'absolute', padding: SIZES.h3, paddingTop: SIZES.padding*3}}
            //     onPress={() => navigation.goBack()}
            //     size='sm'
            //   />
            // </ImageBackground>
        );
    }
    function renderItem() {
        return (
            <ScrollView style={styles.container}>
                {/* Title */}
                <ListItem bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title
                            style={{ fontWeight: 'bold', fontSize: SIZES.h1 }}
                        >
                            {data.attributes.name}
                        </ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron size={SIZES.h2} />
                </ListItem>

                {/* Review */}
                <ListItem bottomDivider>
                    <Icon
                        type="ionicon"
                        name="cash-outline"
                        size={SIZES.h2}
                        color={COLORS.orange}
                    />
                    <ListItem.Content>
                        <ListItem.Title
                            style={{ fontWeight: 'bold', fontSize: SIZES.h2 }}
                        >
                            {data.attributes.price} / {data.attributes.unit}
                        </ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron size={SIZES.h2} />
                </ListItem>
                <CustomDivider text={'Product details'} type={'BOX'} />
                <Text style={{ fontSize: SIZES.body2, padding: SIZES.padding }}>
                    {data.attributes.description}
                </Text>
            </ScrollView>
        );
    }
    function addToCart() {
        const [isVisible, setIsVisible] = React.useState(false);
        const [quantity, setQuantity] = React.useState(0);
        return (
            <View>
                <Button
                    title={`Add to Cart ${quantity}`}
                    buttonStyle={styles.addToCartStyle}
                    titleStyle={{
                        ...FONTS.h2,
                    }}
                    containerStyle={{
                        position: 'relative',
                        padding: SIZES.padding * 2,
                        display: isVisible ? 'none' : 'flex',
                    }}
                    onPress={() => setIsVisible(true)}
                />
                <BottomSheet
                    isVisible={isVisible}
                    containerStyle={{
                        padding: 25,
                        backgroundColor: COLORS.white,
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                padding: SIZES.padding * 4,
                            }}
                        >
                            <QuantityButton
                                name={'minus'}
                                quantity={quantity}
                                setQuantity={setQuantity}
                            />
                            <Text style={{ ...FONTS.h2 }}>{quantity}</Text>
                            <QuantityButton
                                name={'plus'}
                                quantity={quantity}
                                setQuantity={setQuantity}
                            />
                        </View>
                        <Button
                            title="Add to Cart"
                            buttonStyle={styles.addToCartStyle}
                            titleStyle={{
                                ...FONTS.h2,
                            }}
                            containerStyle={{
                                position: 'relative',
                                padding: SIZES.padding * 2,
                            }}
                            onPress={() => addItem({itemId, quantity, setIsVisible})}
                        />
                    </View>
                </BottomSheet>
            </View>
        );
    }
    return (
        <View style={styles.root}>
            {header()}
            {renderItem()}
            {addToCart()}
        </View>
    );
};

export default ItemDetailsScreen;

const styles = StyleSheet.create({
    root: {
        height: '100%',
        backgroundColor: COLORS.white,
    },
    container: {
        padding: SIZES.padding * 1,
    },
    addToCartStyle: {
        bottom: 20,
        padding: SIZES.padding * 2,
        width: '100%',
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZES.radius,
    },
});
