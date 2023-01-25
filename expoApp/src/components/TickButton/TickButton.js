import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcon from '../../font-icon/material-icons';
// import FontAwesomeIcons from '../../font-icon/font-awesome-icons';

const TickButton = (size = 14) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View>
        <TouchableOpacity
          onPress={() => setIsChecked(!isChecked)}
          style={styles.container}
        >
          {isChecked ? (
            <MaterialIcon 
              name="check-box-outline-blank" 
              size={24} 
              color="#1BAC4B"
              borderRadius={50}/>
          ) : (
            <MaterialIcon name="check-box" size={24} color="#1BAC4B" />
          )}
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{},
});

export default TickButton;

