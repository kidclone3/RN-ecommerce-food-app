import { View, Text, FlatList, StyleSheet} from 'react-native'
import React from 'react'
import ProductItem from '../../components/ProductItem'
import {Button, Icon} from '@rneui/themed'
import HomeHeader from '../../components/Header/HomeHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons, images, SIZES, COLORS, FONTS } from '../../constants'
import { Image } from '@rneui/base'


const HomeScreen = () => {
    const customData = require('../../../demo-data/laptop.json');

  function renderMainCatagories() {

    const catagoriesData = [
      {
        id: 1,
        name: 'Hamburger',
        icon: icons.hamburger,
      },
      {
        id: 2,
        name: 'Pizza',
        icon: icons.pizza,
      },
      {
        id: 3,
        name: 'Noodles',
        icon: icons.noodle,
      },
      {
        id: 4,
        name: 'Meat',
        icon: icons.meat,
      },
      {
        id: 5,
        name: 'Vegetable',
        icon: icons.salad,
      },
      {
        id: 6,
        name: 'Dessert',
        icon: icons.dessert,
      },
      {
        id: 7,
        name: 'Drink',
        icon: icons.drink,
      },
      {
        id: 8,
        name: 'More',
        icon: icons.mooncake,
      },
    ]

    const renderItem = ({ item }) => {
      return (
        <Button
          color={COLORS.white}
          containerStyle={{
            padding: SIZES.padding,
            paddingBottom: SIZES.padding,
            backgroundColor: COLORS.white,
            // borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: SIZES.padding,
            flex: 1,
            flexDirection: 'column',
            margin: 5,
            height: 80,
            // width: 100,
            // ...styles.shadow
          }}
          onPress={() => console.log(item.name)}
          icon={<Image 
            source={item.icon} 
            resizeMode="contain" 
            style={{width: 30, height: 30}} />
          }
          iconPosition="top"
          title={
            <Text numberOfLines={1}
              style={{
                marginTop: SIZES.padding,
                color: COLORS.black,
                alignSelf: 'center',
                ...FONTS.body4,
              }}
            >
              {item.name}
            </Text>
          }
        >
            
          </Button>
      )
    }

    return (
      <View style={{padding:1}}>
        <Text style={{...FONTS.h1}}>Main</Text>
        <Text style={{...FONTS.h1 }}>Categories</Text>
        <FlatList
          // horizontal
          showsHorizontalScrollIndicator={false}
          data={catagoriesData}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingVertical: SIZES.padding * 2,
            
          }}
          numColumns={Math.ceil(catagoriesData.length / 2)}
        />

      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader/>
      {renderMainCatagories()}
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
});

export default HomeScreen