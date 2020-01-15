import React from 'react'
import {
    ScrollView,
    View,
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

class HomeScreen extends React.Component {

    render() {
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
