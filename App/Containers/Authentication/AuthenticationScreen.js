import React from 'react'
import {Text, View, Image, TouchableOpacity, TextInput, Button, ToastAndroid} from 'react-native'
import {connect} from 'react-redux'
import style from './AuthenticationScreenStyle'
import {Helpers, Images, Colors} from 'App/Theme'
import CommonHeader from "../../Components/common/CommonHeader";
import firebase from 'react-native-firebase';
import NavigationService from "../../Services/NavigationService";

import LoginFacebook from './components/LoginFacebook'

class AuthenticationScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            email: 'quoctho9x@gmail.com',
            password: '',
            errorMessage: null,
            userInfo:{},
        }
    }

    componentDidMount() {
        firebase.auth().signInAnonymously()
            .then((res) => {
                console.log('res',res);
                this.setState({
                    isAuthenticated: true,
                });
            });

    }

    onBackPress = () => {
        this.props.navigation.goBack();
    };

    handleLogin = () => {
        if (this.state.email && this.state.password) {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then((res) => NavigationService.navigate('Map'))
                .catch(error => this.setState({errorMessage: error.message}));
        } else {
            ToastAndroid.show('Please fill all the fields!', ToastAndroid.LONG);
        }
    };

    renderContent = () => {
        return (
            <View style={style.container}>

                <LoginFacebook/>

                <TextInput
                    style={style.textInput}
                    autoCapitalize="none"
                    placeholder="Email"
                    onChangeText={email => this.setState({email})}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    style={style.textInput}
                    autoCapitalize="none"
                    placeholder="Password"
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}
                />
                {this.state.errorMessage && (
                    <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>
                )}
                <View style={{marginVertical: 20}}>
                    <Button title="Login" color="blue" onPress={this.handleLogin} />
                </View>
                <View>
                    <Text>
                        {' '}
                        Don't have an account?
                        <Text
                            // onPress={() => this.props.navigation.navigate('SignUp')}
                            style={{color: 'blue', fontSize: 16}}>
                            {' '}
                            Sign Up{' '}
                        </Text>
                    </Text>
                </View>
            </View>
        );
    };

    render() {
        return (
            <View
                style={[Helpers.fill]}
            >
                <CommonHeader
                    title={"AuthenticationScreen"}
                    onPress={this.onBackPress}
                />
                {this.renderContent()}
            </View>
        )
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthenticationScreen)
