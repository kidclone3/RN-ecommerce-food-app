import React from 'react';
import CustomInput from '../../components/CustomInput';
import CountryFlag from 'react-native-country-flag';
const PhoneNumberInput = () => {
  return (
    <>
      <CustomInput
        label="phoneNumber"
        placeholder="+84"
        leftIcon={<CountryFlag isoCode="vn" size={20} />}
        isFocused={true}
      />
    </>
  );
};

export default PhoneNumberInput;
