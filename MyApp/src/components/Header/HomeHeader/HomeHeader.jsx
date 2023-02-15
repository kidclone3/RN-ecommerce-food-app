import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Icon, Avatar, ListItem } from '@rneui/themed';
import CartButton from '../../Button/CartButton';
import { SIZES } from '../../../constants';

const HomeHeader = () => {
    const avatar =
        'https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F018%2F385%2FRs_634x1024-130605092844-634.DespMe2.mh.060513.jpg';
    return (
        <View style={styles.header}>
            <Avatar
                rounded
                size="medium"
                source={{
                    uri: avatar,
                }}
            />

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: SIZES.body3,
                }}
            >
                <CartButton />
            </View>
        </View>
    );
};

export default HomeHeader;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        padding: SIZES.h3,
        paddingBottom: 10,
        height: '10%',
        // width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
