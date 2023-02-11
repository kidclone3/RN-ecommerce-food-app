import { View, Text, FlatList, ScrollView} from 'react-native'
import React, {useEffect, useState} from 'react'
import ProductItem from '../../components/ProductItem'
import {Button, Icon, Image, SearchBar} from '@rneui/themed'
import HomeHeader from '../../components/Header/HomeHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons, images, SIZES, COLORS, FONTS } from '../../constants'
import {useNavigation} from '@react-navigation/native'
import styles from './styles'
import CategoriesButton from "../../components/CategoriesButton";
import {getCategories} from "../../services/categories";

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
      const [categories, setCategories] = useState([]);

      let loaded = true;
      useEffect(() => {
          getCategories().then((res) => {
              if (loaded) {
                  setCategories(res)
              }
              console.warn(JSON.stringify(categories))
          }).catch((err) => {
              console.log(err)
          })
          return () => {
              loaded = false;
          }
      }, [])
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
        data={categories}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) =>
            <CategoriesButton name={item.attributes.name}
                              icon={item.attributes.icon.data.attributes.url}
                              action={() => {
                                console.warn(item.id)
                              }}
                              itemPerRows={4}
                              direction={"column"}
            />
        }
        containerStyle = {styles.flatList}
        numColumns={4}
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