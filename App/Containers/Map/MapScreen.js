import React from 'react'
import {Text, View, Image, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import style from './MapScreenStyle'
import {Helpers, Images, Colors} from 'App/Theme'
import CommonHeader from "../../Components/common/CommonHeader";
import MapView, {Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE} from "react-native-maps";

class MapScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    onBackPress = () => {
        this.props.navigation.goBack();
    };

    renderMap = () => {
        return (
            <View style={style.containerMap}>
                <MapView
                    style={style.map}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: 10.7122135,
                        longitude: 106.5908384,
                        latitudeDelta: 0,
                        longitudeDelta: 0.05,
                    }}>
                    <Marker
                        coordinate={{
                            latitude: 10.7122135,
                            longitude: 106.5908384,
                        }}
                        title="Location: "
                        description="Tan kien, Binh chanh, Tp.hcm"
                    />
                </MapView>
            </View>
        )
    };

    render() {
        return (
            <View
                style={[Helpers.fill]}
            >
                <CommonHeader
                    title={"MapScreen"}
                    onPress={this.onBackPress}
                />
                {this.renderMap()}
            </View>
        )
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MapScreen)
