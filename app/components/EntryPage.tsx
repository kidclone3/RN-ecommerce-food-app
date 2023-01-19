import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import { Button } from 'react-native-elements';
import { useState, Component, ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';


interface State {
    isSigninInProgress: boolean;
}
export default class EntryPage extends Component<{}, State> {
    constructor(props:any) {
        super(props);
        this.state = {
            isSigninInProgress: false,
        };
    }
    _signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            this.setState({ userInfo });
        } catch (error:any) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
            } else {
            // some other error happened
            }
        }
    };

    componentDidMount() {
        GoogleSignin.configure({
        webClientId: 'YOUR_WEB',
        offlineAccess: true,
        });
    }
    render(): ReactNode {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to the app!</Text>
                <Text style={styles.subtitle}>Please sign in to continue.</Text>
                <LoginButton
                    onLoginFinished={(error:any, result:any) => {
                        if (error) {
                        console.log("login has error: " + result.error);
                        } else if (result.isCancelled) {
                        console.log("login is cancelled.");
                        } else {
                        AccessToken.getCurrentAccessToken().then(
                            (data:any) => {
                            console.log(data.accessToken.toString())
                            }
                        )
                        }
                    }}
                    onLogoutFinished={() => console.log("logout.")}
                    />

                    <GoogleSigninButton
                        style={{ width: 192, height: 48 }}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={this._signIn}
                        disabled={this.state.isSigninInProgress}
                    />

            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 20,
        marginBottom: 30,
    },
});