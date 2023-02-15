import { View, Text } from 'react-native'
import React from 'react'
import { Icon, Button, ListItem, Image, CheckBox } from '@rneui/themed'
import { SIZES, COLORS, images } from '../../../constants'
import { deleteUserCart } from '../../../services/carts'
import { useNavigation } from '@react-navigation/native'
import { pickOrder } from '../../../hooks/pickOrder'
import ImageProduct from '../../ImageProduct'
const SwipeableItem = ({cartId, name, price, quantity, refs, refs_price}) => {
    const [checked, setChecked] = React.useState(false);
    const hook = pickOrder();

    const toggleCheckbox = () => {
        setChecked(!checked);
        // const prevDict = hook.orderedDict;
        // hook.setOrderedDict({ list: {...prevDict.list, [cartId]: checked}});
        console.log("CARID " + cartId);
        if (checked) {
            if (refs.current.includes(cartId)) {
                refs.current.splice(refs.current.indexOf(cartId), 1);
                refs_price.current -= price * quantity;
            }
        } else {
            if (!refs.current.includes(cartId)) {
                refs.current.push(cartId);
                refs_price.current += price * quantity;
            }
        }
        console.log("CHECKED " + checked + " " + refs.current);
        console.log("CHECKED " + checked + " " + refs_price.current);
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
                <ImageProduct itemId={cartId} style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'contain',
                }}/>
                
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
                        {parseInt(price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                    </ListItem.Title>
                </ListItem.Content>
            </ListItem.Content>
        </ListItem.Swipeable></View>
    );
}

export default SwipeableItem