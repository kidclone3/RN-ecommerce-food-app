import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Icon } from '@rneui/themed'
import { COLORS, SIZES } from '../../../constants'


const CheckoutOrderScreen = ({navigation}) => {
    function Header() {
        return (
            <View style={styles.header}>
                <Button
                    buttonStyle={{
                        width: 50,
                        height: 50,
                        borderRadius: 100,
                        backgroundColor: 'white',
                    }}
                    icon={
                        <Icon
                            light
                            type="feather"
                            name="arrow-left"
                            size={SIZES.h3}
                        />
                    }
                    onPress={() => navigation.goBack()}
                    size="sm"
                />
                <Text style={styles.headerText}>My Cart</Text>
            </View>
        );
    }
    function body() {
        return (
            <View>
                <Text>Body</Text>
            </View>
        );
    }
  return (
    <SafeAreaView>
        <Header />
        {body()}
    </SafeAreaView>
  )
}

export default CheckoutOrderScreen

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        padding: SIZES.h3,
        paddingBottom: 10,
        // width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        padding: 10,
        fontSize: SIZES.h1,
        fontWeight: 'bold',
        flex: 1,
    },
})