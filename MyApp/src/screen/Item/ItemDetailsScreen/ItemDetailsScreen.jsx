import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon, Button, ListItem } from '@rneui/themed';
import { COLORS, SIZES } from '../../../constants';
import CustomDivider from '../../../components/CustomDivider';

const ItemDetailsScreen = ({route, navigation}) => {
  const {itemId} = route.params;
  function getItemDetails() {
    // fetch item details from API
    const data = require('../../../../demo-data/laptop.json').products;
    console.log(data);
    return data.filter(item => item.id == itemId)[0];
  }
  const item = getItemDetails();
  function header() {
    return (
      <ImageBackground
        source = {{uri: item.image}}
        style = {{width: '100%', minWidth:SIZES.width/2, height: 300}}
      >
        <Button
          buttonStyle={{ 
            width: 50, height: 50, borderRadius: 100, backgroundColor:'transparent',
          }}
          icon={
              <Icon
                  light
                  type='font-awesome'
              //     type='feather'

                  name='arrow-left'
                  size={SIZES.h3}
                  color='white'
              />
          }
          containerStyle={{position: 'absolute', padding: SIZES.h3, paddingTop: SIZES.padding*3}}
          onPress={() => navigation.goBack()}
          size='sm'
        />
      </ImageBackground>
    )
  }
  function renderItem() {
    return (
      <View style={styles.container}>
        {/* Title */}
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title
              style={{fontWeight: 'bold', fontSize: SIZES.h1}}
            >
              {item.title}
              </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron 
            size={SIZES.h2}
            
          />
        </ListItem>

        {/* Review */}
        <ListItem bottomDivider>
          <Icon 
            type='antdesign'
            name='star'
            size={SIZES.h2}
            color={COLORS.orange}
          />
          <ListItem.Content>
            
            <ListItem.Title
              style={{fontWeight: 'bold', fontSize: SIZES.h2}}
            >
              {item.ratings.toFixed(1)}
              </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron 
            size={SIZES.h2}
          />
        </ListItem>
        <CustomDivider text={"Product details"} type={"BOX"} />
        <Text style={{fontSize: SIZES.body2, padding: SIZES.padding}}>
          {item.description}
        </Text>
      </View>
    )
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {header()}
      {renderItem()}
    </View>
  )
}

export default ItemDetailsScreen

const styles = StyleSheet.create({
  container:{
    padding: SIZES.padding*1,
  }
})