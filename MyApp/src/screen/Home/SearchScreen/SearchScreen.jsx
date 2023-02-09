import { Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import {Icon, Button, SearchBar} from '@rneui/themed'
import {SIZES} from '../../../constants'
import {useNavigation} from '@react-navigation/native'

const SearchScreen = () => {
  const navigation = useNavigation();
  function searchHeader() {
    return (
      <View style = {styles.header}>
        <Button
          buttonStyle={{ width: 50, height: 50, borderRadius: 100, backgroundColor: 'white' }}
          icon={
              <Icon
                  light
                  type='feather'
                  name='arrow-left'
                  size={SIZES.h3}
              />
          }
          onPress={() => navigation.goBack()}
          size='sm'
          containerStyle={{marginRight: 10}}
        />
        <SearchBar 
          round
          lightTheme
          platform="ios"
          cancelIcon={{ type: 'font-awesome', name: 'chevron-left' }}
          placeholder='What are you craving?'
          containerStyle={styles.searchBar}
          inputContainerStyle={styles.searchBarInput}
          onChangeText = {() => console.warn('searching')}
        />
      </View>
    )
  }
  function filter() {
    return (
      <View style = {styles.container}>
        <Text>Filter</Text>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      {searchHeader()}
      {filter()}
    </SafeAreaView>
  )
}

export default SearchScreen

