import { View, Text } from 'react-native'
import React from 'react'
import { Icon, Button, ListItem, Image, CheckBox } from '@rneui/themed'
import { SIZES, COLORS, images } from '../../../constants'
import { deleteUserCart } from '../../../services/carts'
import { useNavigation } from '@react-navigation/native'
const SwipeableItem = ({cartId, name, price, quantity}) => {
    const [checked, setChecked] = React.useState(false);
    const toggleCheckbox = () => {
        setChecked(!checked);
       
    }

    const navigation = useNavigation()
    function onDelete() {
        console.log("Delete cart " + cartId);
        deleteUserCart(cartId).then((res) => {
            console.log("Delete cart " + res);
            navigation.navigate("MyCart");

        }).catch((err) => {
            console.log(err);
        })
        

    }
    return (
        <View>
        <ListItem.Swipeable
            rightContent={() => (
                <Button
                    title="Delete"
                    onPress={() => onDelete()}
                    icon={{ name: 'delete', color: 'white' }}
                    buttonStyle={{
                        borderRadius: SIZES.radius,
                        minWidth: '50%',
                        minHeight: '100%',
                        backgroundColor: 'red',
                    }}
                />
            )}
            containerStyle={{
                width: '100%',
                backgroundColor: COLORS.white,
                borderColor: COLORS.lightGray,
                borderWidth: 2,
                borderRadius: SIZES.radius,
                // marginBottom: SIZES.padding*1.5,
            }}
            leftWidth={SIZES.width / 4}
        >
            <ListItem.CheckBox
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
                checkedColor={COLORS.primary}
                checked={checked}
                onIconPress={() => toggleCheckbox()}
                containerStyle={{
                    backgroundColor: COLORS.white,
                    borderColor: COLORS.white,
                }}
            />
            <ListItem.Content
                style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}
            >
                {/* <Image
                    source={props.image}
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'contain',
                    }}
                /> */}
                <ListItem.Content
                    style={{
                        padding: SIZES.padding * 2,
                        justifyContent: 'space-around',
                        alignItems: 'flex-start',
                        rowGap: SIZES.padding * 1.5,
                    }}
                >
                    <ListItem.Title
                        style={{
                            fontSize: SIZES.h3,
                            fontWeight: 'bold',
                            textAlign: 'left',
                        }}
                    >
                        {name}
                    </ListItem.Title>
                    <ListItem.Subtitle
                        style={{
                            fontSize: SIZES.body4,
                            textAlign: 'left',
                        }}
                    >
                        {quantity}{' '}
                        {quantity > 1 ? 'items ' : 'item  '} |{' '}
                        {/* {props.distance > 1000
                            ? props.distance / 1000 + ' km'
                            : props.distance + ' m'} */}
                    </ListItem.Subtitle>

                    <ListItem.Title
                        style={{
                            fontSize: SIZES.h3,
                            textAlign: 'left',
                            color: COLORS.primary,
                            fontWeight: 'bold',
                        }}
                    >
                        ${price}
                    </ListItem.Title>
                </ListItem.Content>
            </ListItem.Content>
        </ListItem.Swipeable></View>
    );
}

export default SwipeableItem