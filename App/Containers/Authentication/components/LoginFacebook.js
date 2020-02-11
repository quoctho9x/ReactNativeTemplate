import React from 'react'
import {Text, View, Image, TouchableOpacity, TextInput, Button, ToastAndroid, Alert} from 'react-native'
import firebase from 'react-native-firebase';
import {AccessToken, LoginManager,} from 'react-native-fbsdk';
import {Images} from "../../../Theme";

export default class LoginFacebook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: null,
        };

        this.logoutWithFacebook = this.logoutWithFacebook.bind(this);
        this.loginWithFacebook = this.loginWithFacebook.bind(this);
    }

    updateUserInfo = (userInfo) => {
        this.setState({userInfo: userInfo})
    };

    logoutWithFacebook = () => {
        LoginManager.logOut();
        this.setState({userInfo: null});
    };

    async loginWithFacebook() {
        try {
            const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
            if (result.isCancelled) {
                return Alert.alert(
                    'Login Respond',
                    'User cancelled request',
                    [
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                );
            }

            // get the access token
            const data = await AccessToken.getCurrentAccessToken();
            if (!data) {
                // handle this however suites the flow of your app
                return Alert.alert(
                    'Login Respond',
                    'Something went wrong obtaining the users access token',
                    [
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                );
            }

            // create a new firebase credential with the token
            const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
            // login with credential
            const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
            if (firebaseUserCredential && firebaseUserCredential.additionalUserInfo && firebaseUserCredential.additionalUserInfo.profile) {
                // console.log('firebaseUserCredential: ',this);
                this.updateUserInfo(firebaseUserCredential.additionalUserInfo.profile);
            }
            // console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()))
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        let {userInfo} = this.state;
        const isLogin = !!userInfo;
        const buttonText = isLogin ? 'Logout With Facebook' : 'Login From Facebook';
        const onPressButton = isLogin ? this.logoutWithFacebook : this.loginWithFacebook;
        let uriAvatar = (isLogin
            && userInfo.picture
            && userInfo.picture.data
            && userInfo.picture.data.url) ? {uri: userInfo.picture.data.url} : Images.avatar;
        return (
            <View style={[{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 20
            }]}
            >
                <Button title={buttonText}  onPress={onPressButton}/>

                {isLogin && (
                    <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 10}}>
                        <Image
                            style={{width: 40, height: 40, borderRadius: 20}}
                            source={uriAvatar}
                        />
                        <Text style={{fontSize: 16}}>
                            Logged in
                            As: {this.state.userInfo.name ? this.state.userInfo.name : this.state.userInfo.email}
                        </Text>
                    </View>

                )}
            </View>
        )
    }
}

