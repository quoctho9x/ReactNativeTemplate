import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme'
import NavigationService from 'App/Services/NavigationService'
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconFont from '../../lib/IconFont';

export default class Header extends React.Component {
  render() {
    return (
      <View style={{backgroundColor:'yellow',padding:15}}>
        <View>
          {/*<Icon name="shopping-basket" size={40} color="red" />*/}
          {/*<IconFont*/}
          {/*    name={ 'office' }*/}
          {/*    size={ 14 }*/}
          {/*    style={ { color: 'red' } }*/}
          {/*/>*/}

          <Text >this is header</Text>
        </View>
      </View>
    )
  }
}

