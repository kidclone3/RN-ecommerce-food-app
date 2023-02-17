import React from 'react';
import { Image, View, Text, Pressable, Platform } from 'react-native';
import { Dialog, Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { COLORS, SIZES, FONTS } from '../../constants';
import { API_URL } from '../../services';
import { getProductDetail } from '../../services/products';
import ImageProduct from '../ImageProduct';

const ProductItem = ({ itemName, itemId, itemImage, itemPrice, itemQuantity, itemUnit, nonPressable, orderState="ACTIVE", orderStatus="" }) => {
    const navigation = useNavigation();
    const [imageUrl, setImageUrl] = React.useState("");
    const [loading , setLoading] = React.useState(false);
    React.useEffect(() => {
        setLoading(true);
        if (!itemImage) {
            const tmp = getProductDetail(itemId);
            tmp.then((res) => {
                setImageUrl(res.attributes.image.data[0].attributes.url);
            }).catch((err) => {
                console.log(err);
            });
        }
        // console.log("IMG: ", image);
        setLoading(false);
    }, []);
    const onPress = () => {
        if (nonPressable) {
            return;
        }
        navigation.navigate('ItemDetails', {
            itemId: itemId
        });
    };
    
    return (
        <Pressable onPress={onPress} style={styles.root}>
            <Image
                style={styles.image}
                source={{
                    uri: API_URL + (itemImage ? itemImage : imageUrl)
                }}
            />
            {/* <ImageProduct itemId={itemId} itemImage={itemImage} style={styles.image} /> */}
            <View style={[styles.rightContainer]}>
                <Text
                    style={{ alignSelf: 'flex-start', ...FONTS.h3, padding: 5 }}
                    numberOfLines={1}
                >
                    {itemName}
                </Text>
                <View style={{flexDirection:'column'}}>
                    <View
                        style={{
                            flexDirection: 'row',
                            padding: 5,
                            justifyContent: 'flex-start',
                        }}
                    >
                        <Icon
                            type="font-awesome"
                            name="star"
                            size={SIZES.body3}
                            color={COLORS.orange}
                            containerStyle={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'baseline',
                            }}
                        />
                        
                        <Text style={{flex: 4, justifyContent:'flex-start' ,...FONTS.body3, color:COLORS.darkgray}}>
                {itemQuantity} {itemUnit}
            </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            padding: 5,
                            justifyContent: 'space-between',
                            alignItems: 'baseline',
                        }}
                    >
                        <Icon
                            type="font-awesome"
                            name="motorcycle"
                            size={SIZES.body3}
                            color={COLORS.primary}
                            containerStyle={{
                                flex: 1,
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                            }}
                        />
                        <Text
                            style={{
                                flex: 5,
                                alignContent: 'flex-start',
                                ...FONTS.body3,
                                color: COLORS.darkgray,
                            }}
                        >
                            {itemPrice && parseInt(itemPrice).toLocaleString('vi-VN',{style:'currency', currency:'VND'})}
                        </Text>
                        <View>
                            {orderState === "ACTIVE" && (
                                <View>
                                    <Text> {orderStatus} </Text>
                                </View>
                            )}
                            {orderState === "COMPLETED" && (
                                <Icon
                                    type="font-awesome"
                                    name="shopping-cart"
                                    size={SIZES.body3}
                                    color={COLORS.primary}
                                    containerStyle={{
                                        flex: 1,
                                        justifyContent: 'flex-end',
                                        alignItems: 'flex-end',
                                    }}
                                />
                            )}
                            {orderState === "CANCELLED" && (
                                <Icon
                                    type="font-awesome"
                                    name="shopping-cart"
                                    size={SIZES.body3}
                                    color={COLORS.red}
                                    containerStyle={{
                                        flex: 1,
                                        justifyContent: 'flex-end',
                                        alignItems: 'flex-end',
                                    }}
                                />
                            )}
                            
                        </View>
                    </View>
                </View>
                
            </View>
        </Pressable>
    );
};

export default ProductItem;
