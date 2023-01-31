import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({
  onPress,
  text,
  icon,
  bgColor,
  fgColor,
  type = 'PRIMARY',
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
        fgColor ? {color: fgColor} : {},
        icon ? {flexDirection: 'row'} : {},
      ]}>
      {/* {icon ? (
            <SocialIcon
                type={icon}
                style={{marginRight: 10}}
                iconSize={20}

            />)
        : null } */}
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          bgColor ? {backgroundColor: bgColor} : {},
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#29974D',

    width: '100%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
  },
  container_PRIMARY: {},
  container_TERTIARY: {
    backgroundColor: 'transparent',
    borderColor: '#EBEBEB',
    borderWidth: 1,
    borderRadius: 15,
    fontFamily: 'Roboto',
  },
  text: {},
  text_PRIMARY: {
    color: 'white',
  },
  text_TERTIARY: {},
});

export default CustomButton;
