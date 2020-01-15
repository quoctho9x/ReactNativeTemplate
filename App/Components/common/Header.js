import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import Util from "../../lib/Util";
import { FONT_FAMILY, HEADER_TEXT_COLOR, HEADER_TEXT_SIZE, HEADER_TEXT_WEIGHT } from '../../Theme/Global';
import Gradient from './Gradient';

export default class Header extends Component {

    render () {
        let centerViewStyle = styles.centerView
        if(this.props.hiddingRight){
            centerViewStyle = [styles.centerView, {flex: 8, flexDirection: 'row', justifyContent: 'flex-start'}]
        }
        return (
            <Gradient

                style={styles.container}>
                <View style={styles.actionView}>
                    {this.props.leftView}
                </View>

                <View style={centerViewStyle}>
                    {this.props.centerView ? this.props.centerView : <Text numberOfLines={1} ellipsizeMode='tail' style={{
                        fontWeight: HEADER_TEXT_WEIGHT,
                        fontSize: HEADER_TEXT_SIZE,
                        fontFamily: FONT_FAMILY,
                        color: HEADER_TEXT_COLOR
                    }}>{this.props.title}</Text>}

                </View>

                { this.props.hiddingRight ?
                    null
                    :
                    <View style={[styles.actionView,{alignItems:'flex-end'}]}>
                        {this.props.rightView}
                    </View>
                }
            </Gradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: Util.isAndroid() ? 62 : (Util.isiPhoneX() ? 64 : 45),
        flexDirection: 'row',
        paddingLeft: (Platform.OS == 'ios' ? 12 : 16),
        paddingRight: (Platform.OS == 'ios' ? 12 : 16),
        backgroundColor: 'transparent',
    },
    centerView: {
        flex: 6,
        alignItems: 'center'
    },
    actionView: {
        flex: 2
    }

});