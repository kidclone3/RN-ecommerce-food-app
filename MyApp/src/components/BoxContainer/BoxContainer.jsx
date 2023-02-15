import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BoxContainer = props => {
    return (
        <View style={{...styles.boxContainer, ...props.style}}>
            {props.children}
        </View>
    );
};

export default BoxContainer;

const styles = StyleSheet.create({
    boxContainer: {
        // shadowOpacity: 0.8,
        height:200,
        margin: 20,
        alignItems: 'center',
    }
})