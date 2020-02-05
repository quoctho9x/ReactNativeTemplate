import React from 'react'
import {Text, View, Image, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import style from './ProfileScreenStyle'
import {Helpers, Images, Colors} from 'App/Theme'
import CommonHeader from "../../Components/common/CommonHeader";
import ScrollableTabView, {DefaultTabBar} from "react-native-scrollable-tab-view";
import ImagePicker from "react-native-image-picker";
import * as Animatable from 'react-native-animatable';

const imagePickerOptions = {
    title: 'Select Avatar',
    customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: '',
        }
    }

    onBackPress = () => {
        this.props.navigation.goBack();
    };

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
    };
    renderContent = (label) => {
        return (
            <Animatable.View
                tabLabel={label}
                animation={'fadeInLeft'}
                duration={500}
                useNativeDriver={true}
                style={{paddingHorizontal:10}}
            >
                <Text style={style.title}>Name</Text>
                <Text style={style.text}>Quoc Tho</Text>

                <Text style={style.title}>Gender</Text>
                <Text style={style.text}>Male</Text>

                <Text style={style.title}>Locality</Text>
                <Text style={style.text}>Binh chanh, Tp.HCM</Text>
            </Animatable.View>
        )
    };

    renderProfile = () => {
        return (
            <View style={{flex: 1}}>
                <View style={[style.containerAvatar]}>
                    <Animatable.View
                        animation={'zoomIn'}
                        duration={700}
                        useNativeDriver={true}
                    >
                        <TouchableOpacity onPress={() => this.openImagePicker()} style={style.avatar}>
                            <Image
                                source={this.state.avatarSource ? this.state.avatarSource : Images.logo}
                                style={style.image}/>
                        </TouchableOpacity>
                    </Animatable.View>

                    <Text style={[style.name]}>Quoc Tho</Text>
                    <Text style={[style.name]}>Binh chanh, Tp.HCM</Text>
                </View>

                <ScrollableTabView
                    initialPage={0}
                    scrollWithoutAnimation={true}
                    renderTabBar={() =>
                        <DefaultTabBar backgroundColor={Colors.white}
                                       inactiveTextColor={Colors.text}
                                       activeTextColor={Colors.orange}
                                       underlineStyle={{backgroundColor: Colors.orange}}/>}
                >
                    {this.renderContent('Personal')}
                    {this.renderContent('Category')}
                    {this.renderContent('Helpy Score')}
                </ScrollableTabView>
            </View>
        )
    };

    render() {
        return (
            <View
                style={[Helpers.fill]}
            >
                <CommonHeader
                    title={"ProfileScreen"}
                    onPress={this.onBackPress}
                />
                {this.renderProfile()}
            </View>
        )
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileScreen)
