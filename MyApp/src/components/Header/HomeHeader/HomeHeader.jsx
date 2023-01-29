import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon, Avatar, ListItem } from '@rneui/themed'
import NotificationButton from '../../Button/NotificationButton'
import CartButton from '../../Button/CartButton'


const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <Avatar
        rounded
        size='medium'
        source={{
            uri: 'https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F018%2F385%2FRs_634x1024-130605092844-634.DespMe2.mh.060513.jpg',
        }}
        />

    <View style={{padding:10, flexDirection:'row', flexBasis: 'auto', alignSelf:'flex-end'}}>
      {/* <NotificationButton />
      <CartButton /> */}
        <Text style={{padding:10, fontSize: 20, fontWeight: 'bold'}}>Home</Text>

    </View>
      
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        
        height: 70,
        width: '100%',
        justifyContent: 'center',
    },
})