import React from 'react';
import {Image, View, Text, Pressable, Platform} from 'react-native';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import { COLORS, SIZES, FONTS } from '../../constants'

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    ratings: number;
    price: number;
    distance: string;
  };
}

const ProductItem = ({item}: ProductItemProps) => {
  const navigation = useNavigation();

  const onPress = () => {
    console.warn(`Go to product ${item.id}`);
    // navigation.navigate('ProductDetails', {id: item.id});
  };
  return (
    
    <Pressable onPress={onPress} style={styles.root}>
      <Image style={styles.image} source={{uri: item.image}} />
      <View style={[styles.rightContainer]}>
        <Text style={{alignSelf:'flex-start' ,...FONTS.h3, padding: 5}} numberOfLines={1}>
        {item.title}
        </Text>
        {/* Ratings */}
        <View style={{flexDirection:'row', padding: 5}}>
          <Text style={{flex: 1, justifyContent:'flex-start' ,...FONTS.body3, color:COLORS.darkgray}}>
            {item.distance} | 
          </Text>
          <Icon 
            type='octicon' 
            name='star-fill' 
            size={SIZES.body3} 
            color={COLORS.orange} 
            iconStyle={{flex: 1, justifyContent:'center'}} 
          />  
          <Text style={{flex: 2, justifyContent:'center' ,...FONTS.body3, color:COLORS.darkgray}}>
            {item.ratings.toFixed(1)}
          </Text>
        </View>
        <View style={{flexDirection:'row', padding: 5, justifyContent:'space-between', alignItems:'baseline'}}>
          <Icon 
            type='font-awesome'
            name='motorcycle'
            size={SIZES.body3}
            color={COLORS.primary}
            containerStyle={{flex: 1, justifyContent:'flex-start', alignItems:'flex-start'}}
          />
          <Text style={{flex: 5, alignContent:'flex-start' ,...FONTS.body3, color:COLORS.darkgray}}>
          ${item.price}
          </Text>
          
        </View>
        
      </View>
    </Pressable>
  );
};

export default ProductItem;
