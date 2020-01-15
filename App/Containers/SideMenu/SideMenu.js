import React, {Component} from 'react';
import {ScrollView, Text, View, Button, Image} from 'react-native';
import NavigationService from 'App/Services/NavigationService'
import {Images, Helpers} from "../../Theme";

export default class SideMenu extends Component {

  componentDidMount() {
    console.log('this.props: ',this.props);
  }

  render () {
    return (
        <View style={{flex:1,}}>
          <ScrollView>
            <View style={[Helpers.padding, {alignItems:'center',flexDirection: 'row',backgroundColor:'#439aab'}]}>
              <Image source={ Images.logo } style={ {backgroundColor:'red',borderRadius:25, height: 50, width: 50 } } />
              <View style={[ {paddingLeft:15,justifyContent:'center',backgroundColor:'transparent'}]}>
                <Text>Section 1</Text>
                <Text>Section 1</Text>
              </View>

            </View>
            <View>
              <Text>
                Section 2
              </Text>
            </View>
            <View>
              <Text>
                Section 3
              </Text>
            </View>
            <View>
              <Button
                  onPress={()=> NavigationService.navigate('SplashScreen')}
                  title="Refresh"/>

            </View>

          </ScrollView>
        </View>
    );
  }
}
