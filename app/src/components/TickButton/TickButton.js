import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons  from "react-native-vector-icons/MaterialCommunityIcons"
// import CheckBox from '@mui/icons-material/CheckBox'
// import DeleteIcon from '@mui/icons-material/Delete';

const TickButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setIsChecked(!isChecked)}
    >
    {/* <svg data-testid="DeleteIcon"></svg> */}
    <Text>
        Remember me!
    </Text>
      {/* {isChecked ? (
        <Icon name="check" size={24} color="#4F8EF7" />
      ) : (
        <Icon name="check-box-outline-blank" size={24} color="#4F8EF7" />
      )} */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fff',
  },
});

export default TickButton;

