import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {GRADIENT_START_COLOR, GRADIENT_END_COLOR} from '../../Theme/Global';

export default class Gradient extends Component {
    render () {
        return (
            <LinearGradient
                colors={[GRADIENT_START_COLOR, GRADIENT_END_COLOR]}
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                style={this.props.style}>
                {this.props.children}
            </LinearGradient>
        )
    }
}