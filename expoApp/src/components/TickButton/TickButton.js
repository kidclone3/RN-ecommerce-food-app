import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {Stack, CheckBox } from '@rneui/themed';

const TickButton = (size = 14) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Stack row align="center" spacing={1}>
         <CheckBox
           checked={isChecked}
           onPress={() => setIsChecked(!isChecked)}
           // Use ThemeProvider to make change for all checkbox
           iconType="material-community"
           checkedIcon="checkbox-marked"
           uncheckedIcon="checkbox-blank-outline"
           checkedColor="red"
         />
         
       </Stack>
  );
};

const styles = StyleSheet.create({
  container:{},
});

export default TickButton;

