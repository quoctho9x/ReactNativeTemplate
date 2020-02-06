import React, {Component} from 'react';
import {ScrollView, Text, View, TouchableOpacity, Image} from 'react-native';
import NavigationService from 'App/Services/NavigationService'
import {Images, Helpers, Colors} from "../../Theme";
import {small} from "../../Theme/Metrics";
import IconFont from "../../lib/IconFont";

const listMenu = [
    {
        title: 'Redux-Saga',
        icon: 'cog',
        iconColor: Colors.text,
        navigate: 'ExampleScreen'
    },
    {
        title: 'Google Map',
        icon: 'map',
        iconColor: Colors.text,
        navigate: 'Map'
    },
    {
        title: 'Login Facebook',
        icon: 'facebook2',
        iconColor: Colors.text,
        navigate: 'ExampleScreen'
    },
    {
        title: 'title 2',
        icon: 'info',
        iconColor: Colors.text,
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
                              style={[Helpers.smallHorizontalPadding, Helpers.smallVerticalPadding, {
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  borderBottomWidth: 1,
                                  borderColor: Colors.border
                              }]}>
                <IconFont
                    name={item.icon}
                    size={18}
                    style={{color: item.iconColor}}
                />
                <Text style={{paddingLeft: small, fontSize: 18, color:Colors.text}}>
                    {item.title}
                </Text>
            </TouchableOpacity>
        )
    };

    render() {
        return (
            <View style={{flex: 1,}}>
                <ScrollView>
                    <TouchableOpacity style={[Helpers.padding, {alignItems: 'center', flexDirection: 'row', backgroundColor: Colors.skyblue}]}
                                      onPress={() => NavigationService.navigate('Profile')}>
                        <Image source={Images.logo}
                               style={{ borderRadius: 25, height: 50, width: 50, borderWidth:1, borderColor:Colors.white}}/>
                        <View style={[{paddingLeft: 10, justifyContent: 'center', backgroundColor: 'transparent'}]}>
                            <Text style={{color: Colors.text}}>Quoc Tho</Text>
                            <Text style={{color: Colors.text}}>Binh chanh, Tp.HCM</Text>
                        </View>
                    </TouchableOpacity>
                    {this.renderListMenu()}

                </ScrollView>
            </View>
        );
    }
}
