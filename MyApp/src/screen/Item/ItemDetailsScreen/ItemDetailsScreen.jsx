import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon, Button } from '@rneui/themed';
import { SIZES } from '../../../constants';

const ItemDetailsScreen = ({route, navigation}) => {
  const {itemId} = route.params;
  function getItemDetails() {
    // fetch item details from API
    const data = require('../../../../demo-data/laptop.json').products;
    console.log(data);
    return data.filter(item => item.id == itemId)[0];
  }
  function header() {
    const item = getItemDetails();
    return (
      <ImageBackground
        source = {{uri: item.image}}
        style = {{width: '100%', height: 300}}
      >
        <Button
          buttonStyle={{ width: 50, height: 50, borderRadius: 100, backgroundColor:'transparent' }}
          icon={
              // <Icon
              //     light
              //     type='feather'
              //     name='arrow-left'
              //     size={SIZES.h3}
              //     color='white'
              // />
              <Icon
                  light
                  type='font-awesome'
                  name='arrow-left'
                  size={SIZES.h3}
                  color='white'
              />
          }
          containerStyle={{position: 'absolute', padding: SIZES.h3,}}
          onPress={() => navigation.goBack()}
          size='sm'
        />
      </ImageBackground>
    )
  }
  function renderItem() {
    return (
      <View>
        <Text>Item</Text>
      </View>
    )
  }
  return (
    <SafeAreaView>
      {header()}
      {renderItem()}
      <Text>ItemID: {JSON.stringify(itemId)}</Text>
    </SafeAreaView>
  )
}

export default ItemDetailsScreen

const styles = StyleSheet.create({})