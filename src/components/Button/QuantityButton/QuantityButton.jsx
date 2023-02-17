import { View, Text } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import { COLORS, SIZES } from '../../../constants';
import React, { useEffect } from 'react';

const QuantityButton = ({ name, quantity, setQuantity }) => {
    function handlePress() {
        if (quantity === 0 && name === 'minus') return;
        setQuantity(name === 'plus' ? quantity + 1 : quantity - 1);
    }
    return (
        <Button
            buttonStyle={{
                width: 50,
                height: 50,
                backgroundColor: COLORS.white,
                borderRadius: SIZES.radius2,
                borderColor: COLORS.lightGray,
                borderWidth: 1,
            }}
            icon={
                <Icon
                    light
                    type="font-awesome"
                    name={name}
                    size={SIZES.h2}
                    color={COLORS.primary}
                />
            }
            onPress={() => handlePress()}
            size="sm"
        />
    );
};

export default QuantityButton;
