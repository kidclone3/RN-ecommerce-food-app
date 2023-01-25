import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcon from '../../font-icon/material-icons';
// import FontAwesomeIcons from '../../font-icon/font-awesome-icons';

const TickButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setIsChecked(!isChecked)}
      >
      {/* <svg data-testid="DeleteIcon"></svg> */}
      
        {isChecked ? (
          <MaterialIcon name="compass-calibration" size={24} color="#4F8EF7" />
        ) : (
          <MaterialIcon name="compass-calibration" size={24} color="#4F8EF7" />
        )}
      </TouchableOpacity>
      <Text>
      Remember me!
      </Text>
    </View>
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

