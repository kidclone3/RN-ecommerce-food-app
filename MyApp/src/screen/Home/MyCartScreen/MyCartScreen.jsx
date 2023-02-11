import { StyleSheet, Text, SafeAreaView, View, FlatList, Dimensions } from 'react-native'
import React from 'react'
import { Icon, Button, Image, ListItem } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
import { SIZES, COLORS, images } from '../../../constants'

const MyCartScreen = () => {
  const navigation = useNavigation()
  const [isEmpty, setIsEmpty] = React.useState(false)
  const data = [
    {
      id: 1,
      name: 'Burger',
      price: 10,
      image: images.burger,
      quantity: 1,
      distance: 800,
    },
    {
      id: 3,
      name: 'Pizza',
      price: 10,
      image: images.pizza,
      quantity: 2,
      distance: 1500,
    },
    {
      id: 4,
      name: 'Pasta',
      price: 10,
      image: images.tomato_pasta,
      quantity: 3,
      distance: 2000,
    },
    {
      id: 5,
      name: 'Salad',
      price: 10,
      image: images.salad,
      quantity: 1,
      distance: 2500,
    },
    {
      id: 6,
      name: 'Sushi',
      price: 10,
      image: images.sushi,
      quantity: 1,
      distance: 3000,
    },
  ]

  function CartHeader() {
    return (
      <View style={styles.header}>
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
        />
        <Text style={styles.headerText}>My Cart</Text>
    </View>
    )
  }
  function emptyCart() {
    return (
      <View style={styles.container}>
        <Image
          source={images.clipboards}
          style={{
            width: 300,
            height: 300,
            resizeMode: 'contain',
          }}
        />
        <Text style={{
          padding: SIZES.padding*2,
          fontSize: SIZES.h2,
          fontWeight: 'bold',
        }}>
          Empty
        </Text>
        <Text style={{fontSize: SIZES.body3}}>
          You don't have any foods in cart at this time
        </Text>
      </View>
    )
  }
  function SwipeableItem(props) {
    return (
      <ListItem.Swipeable
        rightContent={(reset) => (
          <Button
            title="Delete"
            onPress={() => reset()}
            icon={{ name: 'delete', color: 'white' }}
            buttonStyle={{
              borderRadius:SIZES.radius, minWidth: '50%', minHeight: '100%', backgroundColor: 'red',
              
            }}
          />
        )}
        containerStyle= {{
          width:'100%',
          height: SIZES.width/5,
          backgroundColor: COLORS.white,
          borderColor: COLORS.lightGray,
          borderWidth: 2,
          borderRadius: SIZES.radius,
          // marginBottom: SIZES.padding*1.5,
        }}
        leftWidth={SIZES.width/4}
      >
        <ListItem.Content 
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <Image
            source={props.image}
            style={{
              width: 100,
              height: 100,
              resizeMode: 'contain',
            }}
          />
          <ListItem.Content
            style={{
              padding: SIZES.padding*2,
              justifyContent: 'space-around',
              alignItems: 'flex-start',
              rowGap: SIZES.padding*1.5,
            }}
          >
            <ListItem.Title
              style={{
                fontSize: SIZES.h3,
                fontWeight: 'bold',
                textAlign: 'left',
              }}
            > 
              {props.name}
            </ListItem.Title>
            <ListItem.Subtitle
              style={{
                fontSize: SIZES.body4,
                textAlign: 'left',
              }}
            >
               {props.quantity} {props.quantity > 1 ? 'items ' : 'item  '} | {props.distance > 1000 ? props.distance/1000 + ' km' : props.distance + ' m'}
            </ListItem.Subtitle>

            <ListItem.Title
              style={{
                fontSize: SIZES.h3,
                textAlign: 'left',
                color: COLORS.primary,
                fontWeight: 'bold',
              }}
            >
              ${props.price.toFixed(2)}
            </ListItem.Title>
            

          </ListItem.Content>
        </ListItem.Content>
      </ListItem.Swipeable>
    )
  }
  function listOrdered() {
    return (
      <View
        style={styles.containerSwipeable}
      >
      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <SwipeableItem
            name={item.name}
            price={item.price}
            image={item.image}
            quantity={item.quantity}
            distance={item.distance}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      </View>
     
    )
  }
  return (
    <SafeAreaView>
      {CartHeader()}
      {isEmpty ? emptyCart() : listOrdered()}
    </SafeAreaView>
  )
}

export default MyCartScreen

const styles = StyleSheet.create({
  header: {
      flexDirection: 'row',
      backgroundColor: COLORS.white,
      padding: SIZES.h3,
      paddingBottom: 10,
      height: '10%',
      // width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
  },
  headerText: {
    padding:10, 
    fontSize: 20, 
    fontWeight: 'bold',
    flex: 1,
  },
  container: {
    height: '90%',
    width: '100%',
    backgroundColor: COLORS.white,
    // position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    // flexDirection: 'column',
  },
  containerSwipeable: {
    height: '90%',
    width: '100%',
    backgroundColor: COLORS.white,
    // position: 'relative',
    // flexDirection: 'column',
  },
 
})