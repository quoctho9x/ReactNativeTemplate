import React, {Component} from 'react';
import {ScrollView, Text, View, TouchableOpacity, Image} from 'react-native';
import NavigationService from 'App/Services/NavigationService'
import {Images, Helpers} from "../../Theme";
import {small} from "../../Theme/Metrics";
import IconFont from "../../lib/IconFont";

const listMenu = [
    {
        title: 'Redux-Saga',
        icon: 'cog',
        iconColor: 'red',
        navigate: 'ExampleScreen'
    },
    {
        title: 'Google Map',
        icon: 'map',
        iconColor: 'red',
        navigate: 'ExampleScreen'
    },
    {
        title: 'Login Facebook',
        icon: 'facebook2',
        iconColor: 'red',
        navigate: 'ExampleScreen'
    },
    {
        title: 'title 2',
        icon: 'info',
        iconColor: 'red',
        navigate: 'ExampleScreen'
    },
];
export default class SideMenu extends Component {

    componentDidMount() {
        console.log('this.props: ', this.props);
    }

    renderListMenu = () => {
        return listMenu.map((item, index) =>
            <TouchableOpacity key={`${index}`} onPress={() => NavigationService.navigate(item.navigate)}
                              style={[Helpers.horizontalPadding, Helpers.smallVerticalPadding, {
                                  flexDirection: 'row',
                                  alignItems: 'center'
                              }]}>
                <IconFont
                    name={item.icon}
                    size={18}
                    style={{color: item.iconColor}}
                />
                <Text style={{paddingLeft: small, fontSize: 16,}}>
                    {item.title}
                </Text>
            </TouchableOpacity>
        )
    };

    render() {
        return (
            <View style={{flex: 1,}}>
                <ScrollView>
                    <TouchableOpacity style={[Helpers.padding, {alignItems: 'center', flexDirection: 'row', backgroundColor: '#439aab'}]}
                                      onPress={() => NavigationService.navigate('SplashScreen')}>
                        <Image source={Images.logo}
                               style={{backgroundColor: 'red', borderRadius: 25, height: 50, width: 50}}/>
                        <View style={[{paddingLeft: 15, justifyContent: 'center', backgroundColor: 'transparent'}]}>
                            <Text>Section 1</Text>
                            <Text>Section 1</Text>
                        </View>
                    </TouchableOpacity>
                    {this.renderListMenu()}

                </ScrollView>
            </View>
        );
    }
}
