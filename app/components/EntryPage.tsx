import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import {useDispatch, useSelector} from 'react-redux';
import { bindActionCreators } from 'redux';
import { View } from 'react-native';
import { actionCreator, State} from '../state/index';
import { Button } from 'react-native-elements';

function EntryPage() {
    const dispatch = useDispatch();
    const {LoginStart, LoginSuccess , LoginError} = bindActionCreators(actionCreator, dispatch);
    const state = useSelector((state: State) => state.loginState);
    return (
        <View >
            <Button
                title="Login start"
                onPress={() => {
                    LoginStart(true);
                }
            }
            />
            <Button
                title="Login Success"
                onPress={() => {
                    LoginSuccess('Hihi');
                }}
            />
            <Button
                title="Login Error"
                onPress={() => {
                    LoginError(false);
                }}
            />
        </View>
    );

};
export default EntryPage;