import React from 'react';
import { Image, View, Text, Pressable, Platform } from 'react-native';
import { Icon, ListItem } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { COLORS, SIZES, FONTS } from '../../constants';
import { getProductDetail } from '../../services/products';
import { API_URL } from '../../services';

const ProductItem = ({id}) => {
    const navigation = useNavigation();
    const [image, setImage] = React.useState("");
    const [data, setData] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        setLoading(true);
        getProductDetail(id).then((res) => {
            // console.log(res);
            setData(res);
        }
        ).catch((err) => {
            console.log(err);
        });
        setTimeout(() => setLoading(false), 1000);
    }, []);
    const onPress = () => {
        // navigation.navigate('ItemDetails', {
        //     itemId: itemId,
        //     navigation: navigation,
        // });
    };
    return (
        <View style={styles.root}>
            <Text>{JSON.stringify(data)} </Text>
            <ListItem bottomDivider>
                {/* <Image
                    style={styles.image}
                    source={{
                        uri: API_URL + data.attributes.image.data[0].attributes.url,
                        // cache: 'only-if-cached',
                    }}
                /> */}
                <ListItem.Content>
                    <ListItem.Title style={{ alignSelf: 'flex-start', ...FONTS.h3, padding: 5 }}>
                        {data.attributes.name}
                    </ListItem.Title>
                    <ListItem.Subtitle style={{ alignSelf: 'flex-start', ...FONTS.body3, padding: 5 }}>
                        {quantity}
                    </ListItem.Subtitle>
                    <ListItem.Subtitle style={{ alignSelf: 'flex-start', ...FONTS.h3, padding: 5, color:COLORS.primary }}>
                        {parseInt(price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}

                    </ListItem.Subtitle>
                    

                </ListItem.Content>
            </ListItem>
        </View>
    );
};

export default ProductItem;
