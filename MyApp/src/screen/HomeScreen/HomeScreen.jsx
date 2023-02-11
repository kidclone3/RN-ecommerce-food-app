import { View, Text, FlatList, ScrollView} from 'react-native'
import React from 'react'
import ProductItem from '../../components/ProductItem'
import {Button, Icon, Image, SearchBar} from '@rneui/themed'
import HomeHeader from '../../components/Header/HomeHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons, images, SIZES, COLORS, FONTS } from '../../constants'
import {useNavigation} from '@react-navigation/native'
import styles from './styles'

const HomeScreen = () => {
  const navigation = useNavigation();
  const [search, setSearch] = React.useState('');

  function searchBar() {
    return (
      <SearchBar 
        round
        lightTheme
        platform="ios"
        cancelIcon={{ type: 'font-awesome', name: 'chevron-left' }}
        showLoading = {search.length > 0} 
        placeholder='What are you craving?'
        containerStyle={styles.searchBar}
        inputContainerStyle={styles.searchBarInput}
        onChangeText = {() => navigation.push("SearchScreen")}
        
      />
    )
  }

    const customData = require('../../../demo-data/laptop.json').products;

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
        screen: "CategoriesScreen"
      },
    ]


    const renderItem = ({ item }) => {
      return (
        <Button
          color={COLORS.white}
          containerStyle={styles.buttonContainer}
          onPress={() => item.screen ? navigation.navigate(item.screen) : console.warn(item.name)}
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
    function catagoriesHeader() {
      return (
        <View style={styles.header}>
          <Text style={{...FONTS.h1}}>Main</Text>
          <Text style={{...FONTS.h1 }}>Categories</Text>
        </View>
      )
    }
    return (
      <FlatList
        bounces={true}
        ListHeaderComponent={catagoriesHeader}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        data={catagoriesData}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          // paddingVertical: SIZES.padding * 2,
          
        }}
        containerStyle = {styles.flatList}
        numColumns={Math.ceil(catagoriesData.length / 2)}
      />
    )
  }
  function renderProductList() {
    const renderItem = ({ item }) => {
      return (
        <ProductItem
          item={item}
          // onPress={() => navigation.navigate("ProductDetailScreen", {
          //   item: item
          // })}
          onPress = {() => {console.log("pressed")}}
        />
      )
    }
    return (
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={{...FONTS.h1 }}>
            Recommend for you! 
          </Text>
        </View>
         <FlatList
          showsVerticalScrollIndicator={false}
          data={customData}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingVertical: SIZES.padding * 2,
            padding: SIZES.padding * 2,
          }}
        />
        </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader/>
      <ScrollView >
        {searchBar()}
        {renderMainCatagories()}
        {renderProductList()}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen