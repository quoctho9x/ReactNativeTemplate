import React from 'react'
import {
    ScrollView,
    View, Button, Image, TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import {liveInEurope} from 'App/Stores/Example/Selectors'
import {Helpers, Images} from 'App/Theme'
import NavigationService from 'App/Services/NavigationService'
import IconFont from '../../lib/IconFont';
import Header from "../../Components/common/Header";
import GridView from "../../Components/GridView";

import ImagePicker from 'react-native-image-picker';
import Share from 'react-native-share';
import Modal from 'react-native-modalbox';

const imagePickerOptions = {
    title: 'Select Avatar',
    customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

const shareOptions = {
    title: 'Share App',
    message: 'ReactNativeTemplate',
    url: 'https://github.com/quoctho9x/ReactNativeTemplate',
    social: Share.Social.WHATSAPP,
    whatsAppNumber: "9199999999",  // country code + phone number(currently only works on Android)
    filename: 'test' , // only for base64 file in Android
};

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: '',
        }
    }

    openImagePicker = () => {
        ImagePicker.showImagePicker(imagePickerOptions, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = {uri: response.uri};

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source,
                });
            }
        });
    }

    onShare = () =>{
        Share.open(shareOptions)
            .then((res) => { console.log(res) })
            .catch((err) => { err && console.log(err); });
    }

    render() {
        console.log('avatarSource: ', this.state.avatarSource);
        return (
            <View style={[styles.container]}>
                <Header title={'React native Template'}
                        leftView={
                            <TouchableOpacity onPress={this.props.navigation.openDrawer}>
                                <IconFont
                                    name={'menu'}
                                    size={20}
                                    style={{color: '#fff'}}
                                />
                            </TouchableOpacity>}
                        rightView={
                            <TouchableOpacity>
                                <IconFont
                                    name={'user'}
                                    size={20}
                                    style={{color: '#fff'}}
                                />
                            </TouchableOpacity>
                        }
                />

                <ScrollView style={[Helpers.padding]}>
                    <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap',}}>
                        <GridView width={'50%'}
                                  backgroundColor={'red'}
                                  source={Images.logo}
                                  icon={'cog'}
                                  title={'redux-saga'}
                                  onPress={() => NavigationService.navigate('ExampleScreen')}/>
                        <GridView width={'50%'}
                                  backgroundColor={'blue'}
                                  source={Images.logo}
                                  icon={'menu'}
                                  title={'React native Template 2'}
                                  onPress={this.props.navigation.openDrawer}/>
                    </View>

                    <Button onPress={this.onShare} title ='share'/>

                    <TouchableOpacity onPress={() => this.openImagePicker()} style={{marginTop:20, alignSelf:'center',}}>
                        <Image
                               source={this.state.avatarSource ? this.state.avatarSource : Images.logo}
                               style={{width: 100, height: 100}}/>
                    </TouchableOpacity>

                    <Button title="Modal with keyboard support" onPress={() => this.refs.modal7.open()} style={styles.btn}/>
                    <Modal ref={"modal7"}
                           style={[styles.modal, styles.modal4]}
                           coverScreen={true}
                           position={"center"}>
                        <View>
                            <TextInput style={{height: 50, width: 200, backgroundColor: '#DDDDDD'}}/>
                        </View>
                    </Modal>

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    btn: {
        margin: 10,
        backgroundColor: "#3B5998",
        color: "white",
        padding: 10
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal4: {
        height: 300
    },

});

HomeScreen.propTypes = {
    user: PropTypes.object,
    userIsLoading: PropTypes.bool,
    userErrorMessage: PropTypes.string,
    fetchUser: PropTypes.func,
    liveInEurope: PropTypes.bool,
}

const mapStateToProps = (state) => ({
    user: state.example.user,
    userIsLoading: state.example.userIsLoading,
    userErrorMessage: state.example.userErrorMessage,
    liveInEurope: liveInEurope(state),
})

const mapDispatchToProps = (dispatch) => ({
    fetchUser: () => dispatch(ExampleActions.fetchUser()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen)
