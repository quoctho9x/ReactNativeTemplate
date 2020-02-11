import React from 'react'
import {
    ScrollView,
    View, Button, Image, TextInput, Text,
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

import Share from 'react-native-share';
import Modal from 'react-native-modalbox';

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

    onShare = () =>{
        Share.open(shareOptions)
            .then((res) => { console.log(res) })
            .catch((err) => { err && console.log(err); });
    }

    renderTabHeader = () => {
        return (
            null
        )
    };

    renderHomeScreen = () => {
        return (
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
                              icon={'map'}
                              title={'Google Map'}
                              onPress={() => NavigationService.navigate('Map')}/>
                    <GridView width={'50%'}
                              backgroundColor={'blue'}
                              source={Images.logo}
                              icon={'facebook2'}
                              title={'Authentication'}
                              onPress={() => NavigationService.navigate('Authentication')}/>
                </View>

                <Button onPress={this.onShare} title ='share'/>

                {/*<Button title="Modal with keyboard support" onPress={() => this.refs.modal7.open()} style={styles.btn}/>*/}
                <Modal ref={"modal7"}
                       style={[styles.modal, styles.modal4]}
                       coverScreen={true}
                       position={"center"}>
                    <View>
                        <TextInput style={{height: 50, width: 200, backgroundColor: '#DDDDDD'}}/>
                    </View>
                </Modal>

            </ScrollView>
        )
    }

    render() {
        // console.log('avatarSource: ', this.state.avatarSource);
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
                            <TouchableOpacity onPress={() => NavigationService.navigate('Profile')}>
                                <IconFont
                                    name={'user'}
                                    size={20}
                                    style={{color: '#fff'}}
                                />
                            </TouchableOpacity>
                        }
                />
                { this.renderHomeScreen() }

                {/*{ this.renderTabHeader() }*/}
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


    indicatorContainer: {
        backgroundColor: 'transparent',
        height: 40,
        borderTopWidth: 0,
        paddingTop: 0,
        paddingBottom: 0,
    },
    tabIcon: {
        opacity: 0.7,
        width: 16,
        height: 16,
        resizeMode: 'contain',
        marginRight: 5,
    },
    selectedTabIcon: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        marginRight: 5,
    },
    tabTxt: {
        marginTop: 0,
        opacity: 0.7,
        // fontFamily: FONT_FAMILY,
        fontSize: 13,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#ffffff",
    },
    selectedTabTxt: {
        marginTop: 0,
        // fontFamily: FONT_FAMILY,
        fontSize: 13,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#ffffff"
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    selectedTabItem: {
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    }

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
