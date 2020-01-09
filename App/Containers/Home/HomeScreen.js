import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './HomeScreenStyle'
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme'
import NavigationService from 'App/Services/NavigationService'
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconFont from '../../lib/IconFont';
import Header from "../../Components/common/Header";

class HomeScreen extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <View style={[
        Helpers.fill,
      ]}>
        <Header/>
        <View  style={[
          Metrics.mediumHorizontalMargin,
          Metrics.mediumVerticalMargin,
        ]}>
          <View style={Style.logoContainer}>
            <Image style={Helpers.fullSize} source={Images.logo} resizeMode={'contain'} />
          </View>

          <Icon name="shopping-basket" size={40} color="red" />
          <IconFont
              name={ 'office' }
              size={ 14 }
              style={ { color: 'red' } }
          />

          <Text style={Style.text}>this is home screen</Text>
          <Button
              style={ApplicationStyles.button}
              onPress={() => this._fetchUser2()}
              title="Refresh"
          />
        </View>
      </View>
    )
  }

  _fetchUser2() {
    console.log(' this.props.navigation', this.props.navigation);
    this.props.navigation.openDrawer();
    // this.props.fetchUser();
    // console.log('NavigationService',NavigationService);
    // NavigationService.navigate('SplashScreen');
  }
}

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
