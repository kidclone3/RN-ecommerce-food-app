import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Avatar, Divider, Icon, ListItem } from '@rneui/themed';
import { COLORS, SIZES } from '../../constants';
import { logout } from '../../services/account';
import EncryptedStorage from 'react-native-encrypted-storage';

const ProfileScreen = ({ navigation }) => {
    const [loading, setLoading] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [jwt, setJwt] = React.useState('');
    const avatar =
        'https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F018%2F385%2FRs_634x1024-130605092844-634.DespMe2.mh.060513.jpg';
    function header() {
        return (
            <View style={styles.header}>
                <Avatar
                    rounded
                    size="medium"
                    source={{
                        uri: avatar,
                    }}
                />

                <Text style={styles.headerText}>Profile</Text>
            </View>
        );
    }
    React.useEffect(() => {
        const res = async () => {
            const f_email = await EncryptedStorage.getItem('username');
            const f_jwt = await EncryptedStorage.getItem('jwt');
            setEmail(f_email);
            setJwt(f_jwt);
        };
        setLoading(true);
        res();
        setLoading(false);

    }, []);
    function body() {
        return (
            <View style={styles.body}>
                
                <ListItem bottomDivider>
                    <Avatar
                        rounded
                        size="large"
                        source={{
                            uri: avatar,
                        }}
                    />
                    <ListItem.Content>
                        <ListItem.Title
                            style={{ fontSize: SIZES.h2, fontWeight: 'bold' }}
                        >
                            {email}
                        </ListItem.Title>
                        <ListItem.Title
                            style={{ fontSize: SIZES.h2, fontWeight: 'bold' }}
                        >
                            {console.log("jwt " + jwt)}
                        </ListItem.Title>
                        <ListItem.Subtitle>0123456789</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>

                <ListItem bottomDivider>
                    <Icon
                        type="ionicon"
                        name="wallet-outline"
                        size={SIZES.body2}
                    />
                    <ListItem.Content>
                        <ListItem.Title
                            style={{
                                fontSize: SIZES.body2,
                                fontWeight: 'bold',
                            }}
                        >
                            Payment Methods
                        </ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <ListItem
                    onPress={() => {
                        console.warn('pressed');
                    }}
                >
                    <Icon
                        type="ionicon"
                        name="person-outline"
                        size={SIZES.body2}
                    />
                    <ListItem.Content>
                        <ListItem.Title
                            style={{
                                fontSize: SIZES.body2,
                                fontWeight: 'bold',
                            }}
                        >
                            Profile
                        </ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <ListItem>
                    <Icon
                        type="ionicon"
                        name="location-outline"
                        size={SIZES.body2}
                    />
                    <ListItem.Content>
                        <ListItem.Title
                            style={{
                                fontSize: SIZES.body2,
                                fontWeight: 'bold',
                            }}
                        >
                            Address
                        </ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <ListItem>
                    <Icon
                        type="ionicon"
                        name="notifications-outline"
                        size={SIZES.body2}
                    />
                    <ListItem.Content>
                        <ListItem.Title
                            style={{
                                fontSize: SIZES.body2,
                                fontWeight: 'bold',
                            }}
                        >
                            Notification
                        </ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <ListItem>
                    <Icon
                        type="ionicon"
                        name="help-outline"
                        size={SIZES.body2}
                        color="#000"
                    />
                    <ListItem.Content>
                        <ListItem.Title
                            style={{
                                fontSize: SIZES.body2,
                                fontWeight: 'bold',
                            }}
                        >
                            Help Center
                        </ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <ListItem
                    button
                    onPress={async () => {
                        await logout();
                        navigation.push('LetInScreen');
                    }}
                >
                    <Icon
                        type="ionicon"
                        name="log-out-outline"
                        size={SIZES.body2}
                        color={COLORS.red}
                    />
                    <ListItem.Content>
                        <ListItem.Title
                            style={{
                                fontSize: SIZES.body2,
                                fontWeight: 'bold',
                                color: COLORS.red,
                            }}
                        >
                            Logout
                        </ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            </View>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            {header()}
            {body()}
        </SafeAreaView>
    );
};

export default ProfileScreen;
