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
    navigation.navigate('ItemDetails', {itemId: item.id, navigation: navigation});
  };
  return (
    
    <Pressable onPress={onPress} style={styles.root}>
      <Image style={styles.image} source={{uri: item.image}} />
      <View style={[styles.rightContainer]}>
        <Text style={{alignSelf:'flex-start' ,...FONTS.h3, padding: 5}} numberOfLines={1}>
        {item.title}
        </Text>
        {/* Ratings */}
        <View style={{flexDirection:'row', padding: 5, justifyContent:'flex-start'}}>
          <Text style={{flex: 1, justifyContent:'flex-start' , alignItems:'baseline',...FONTS.body3, color:COLORS.darkgray}}>
            {item.distance}  | 
          </Text>
          <Icon 
            type='font-awesome' 
            name='star' 
            size={SIZES.body3} 
            color={COLORS.orange} 
            containerStyle={{ flex: 1, justifyContent:'center', alignItems:'baseline'}} 
          />  
          <Text style={{flex: 1, justifyContent:'flex-start' ,...FONTS.body3, color:COLORS.darkgray}}>
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
          <Icon 
            type='font-awesome'
            name='heart-o'
            size={SIZES.body3}
            color={COLORS.pink}
            containerStyle={{flex: 1, justifyContent:'flex-start', alignItems:'flex-start'}}
          />
        </View>
        
      </View>
    </Pressable>
  );
};

export default ProductItem;
