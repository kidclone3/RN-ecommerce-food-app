import React from 'react';
import { Image, View, Text, Pressable, Platform } from 'react-native';
import { Icon, ListItem } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { COLORS, SIZES, FONTS } from '../../constants';
import { getProductDetail } from '../../services/products';
import { API_URL } from '../../services';

const ProductItem = ({ name, id, price, quantity }) => {
    const navigation = useNavigation();
    const [image, setImage] = React.useState("");
    React.useEffect(() => {
        getProductDetail(id).then((res) => {
            // console.log(res);
            setImage(API_URL + res.image.data[0].attributes.url)
        }
        ).catch((err) => {
            console.log(err);
        });
    }, []);
    const onPress = () => {
        // navigation.navigate('ItemDetails', {
        //     itemId: itemId,
        //     navigation: navigation,
        // });
    };
    return (
        <View style={styles.root}>
            <ListItem bottomDivider>
                <Image
                    style={styles.image}
                    source={{
                        uri: image,
                        // cache: 'only-if-cached',
                    }}
                />
                <ListItem.Content>
                    <ListItem.Title style={{ alignSelf: 'flex-start', ...FONTS.h3, padding: 5 }}>
                        {name}
                    </ListItem.Title>
                    <ListItem.Subtitle style={{ alignSelf: 'flex-start', ...FONTS.body3, padding: 5 }}>
                        {quantity}
                    </ListItem.Subtitle>
                    <ListItem.Subtitle style={{ alignSelf: 'flex-start', ...FONTS.h3, padding: 5, color:COLORS.primary }}>
                        {price}
                    </ListItem.Subtitle>
                    

                </ListItem.Content>
            </ListItem>
        </View>
    );
};

export default ProductItem;
