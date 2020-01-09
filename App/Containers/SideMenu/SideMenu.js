import React, {Component} from 'react';
import {ScrollView, Text, View, Button} from 'react-native';
import NavigationService from 'App/Services/NavigationService'

export default class SideMenu extends Component {

  componentDidMount() {
    console.log('this.props: ',this.props);
  }

  render () {
    return (
        <View style={{flex:1,}}>
          <ScrollView>
            <View>
              <Text>
                Section 1
              </Text>
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
              <Text>
                Section 4
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
