import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Icon, Button, ListItem, BottomSheet } from '@rneui/themed';
import { COLORS, SIZES, FONTS } from '../../../constants';
import CustomDivider from '../../../components/CustomDivider';
import QuantityButton from '../../../components/Button/QuantityButton';
import productDetail from '../../../services/products/ProductDetail';
import { API_URL } from '../../../services';

const ItemDetailsScreen = ({route, navigation}) => {
  const {itemId} = route.params;
  const interfaceData = require('../../../../demo-data/itemDetails.json')
  const [data, setData] = React.useState([interfaceData]);
  let loaded = true;
  React.useEffect(() => {
    productDetail(itemId).then((res) => {
      if (loaded) {
        setData(res)
      }
      console.log("here!" + JSON.stringify(data))
    }).catch((err) => {
      console.log(err)
    })
    return () => {
      loaded = false;
    }
  }, [interfaceData])
  function getItemDetails() {
    // fetch item details from API
    // const data = require('../../../../demo-data/laptop.json').products;
    console.log(data);
    // return data.filter(item => item.id == itemId)[0];
  }
  // const item = getItemDetails();
  function header() {
    return (
      <Text> {data.attributes}</Text>
      // <ImageBackground
      //   source = {{
      //     uri: API_URL+ data.attributes.image.data[0].attributes.url,
      //     cache: 'only-if-cached'
      //   }}
      //   style = {{width: '100%', minWidth:SIZES.width/2, height: 300}}
      // >
      //   <Button
      //     buttonStyle={{ 
      //       width: 50, height: 50, borderRadius: 100, backgroundColor:'transparent',
      //     }}
      //     icon={
      //         <Icon
      //             light
      //             type='font-awesome'
      //         //     type='feather'

      //             name='arrow-left'
      //             size={SIZES.h3}
      //             color='white'
      //         />
      //     }
      //     containerStyle={{position: 'absolute', padding: SIZES.h3, paddingTop: SIZES.padding*3}}
      //     onPress={() => navigation.goBack()}
      //     size='sm'
      //   />
      // </ImageBackground>
    )
  }
  function renderItem() {
    return (
      <ScrollView style={styles.container}>
        {/* Title */}
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title
              style={{fontWeight: 'bold', fontSize: SIZES.h1}}
            >
              {data.attributes.name}
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
              {/* {data.ratings.toFixed(1)} */}
              </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron 
            size={SIZES.h2}
          />
        </ListItem>
        <CustomDivider text={"Product details"} type={"BOX"} />
        <Text style={{fontSize: SIZES.body2, padding: SIZES.padding}}>
          {data.attributes.description}
        </Text>
      </ScrollView>
    )
  }
  function addToBasket() {
    const [isVisible, setIsVisible] = React.useState(false);
    const [quantity, setQuantity] = React.useState(0);
    return (
      <View>
        <Button
          title="Add to Basket"
          buttonStyle={styles.addToBasketStyle}
          titleStyle={{
            ...FONTS.h2,
          }}
          containerStyle={
            {
              position:'relative',
              padding: SIZES.padding*2,
              display: isVisible ? 'none' : 'flex'
            }
          }
          onPress={() => setIsVisible(true)}
        />
        <BottomSheet isVisible={isVisible} 
          containerStyle= {{padding: 25, backgroundColor: COLORS.white}}
        >
          <View style={{ flex: 1 }}>
            <View style={{
              flexDirection: 'row', 
              justifyContent: 'space-between', 
              padding: SIZES.padding*4
            }}>
              <QuantityButton name={'minus'} quantity={quantity} setQuantity={setQuantity}/>
              <Text style={{...FONTS.h2}}>{quantity}</Text>
              <QuantityButton name={'plus'} quantity={quantity} setQuantity={setQuantity}/>
              </View>
            <Button
              title="Add to Basket"
              buttonStyle={styles.addToBasketStyle}
              titleStyle={{
                ...FONTS.h2,
              }}
              containerStyle={
                {
                  position:'relative',
                  padding: SIZES.padding*2,
                }}
              onPress={() => setIsVisible(false)}
            />
          </View>
        </BottomSheet>
      </View>
    )
  }
  return (
    <View
      style={styles.root}
    >
      {header()}
      {renderItem()}
      {addToBasket()}
    </View>
  )
}

export default ItemDetailsScreen

const styles = StyleSheet.create({
  root: {
    height: "100%",
    backgroundColor: COLORS.white,
  },
  container:{
    padding: SIZES.padding*1,
    
  },
  addToBasketStyle: {
    bottom: 20,
    padding: SIZES.padding*2,
    width: '100%',
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.radius,
  }
})