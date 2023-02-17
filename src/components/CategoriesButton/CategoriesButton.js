import { SIZES, COLORS, FONTS } from '../../constants';
import { StyleSheet } from 'react-native';
import { Button, Image, Text } from '@rneui/themed';
import { API_URL } from '../../services';
import React from 'react';

const CategoriesButton = ({ name, icon, action, itemPerRows, direction }) => {
    const styles = StyleSheet.create({
        buttonContainer: {
            backgroundColor: COLORS.white,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: SIZES.padding,
            marginHorizontal: SIZES.padding / 2,
            flexDirection: direction,
            height: 90,
            width: SIZES.width / itemPerRows - SIZES.padding,
        },
        title: {
            marginTop: SIZES.padding,
            color: COLORS.black,
            alignSelf: 'center',
            ...FONTS.body4,
            flexWrap: 'wrap',
            textAlign: 'center',
        },
    });

    return (
        <Button
            color={COLORS.white}
            containerStyle={styles.buttonContainer}
            onPress={action}
            icon={
                <Image
                    source={{ uri: API_URL + icon }}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30,
                        marginRight: direction === 'row' ? 10 : 0,
                    }}
                />
            }
            iconPosition={direction === 'column' ? 'top' : 'left'}
            title={<Text style={styles.title}>{name}</Text>}
        />
    );
};
export default CategoriesButton;
