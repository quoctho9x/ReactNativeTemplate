import React, { Component } from 'react';
import {TouchableOpacity, } from 'react-native';
import Header from "./Header";
import IconFont from "../../lib/IconFont";

export default class CommonHeader extends React.Component {
    render() {
        let title = this.props.title ? this.props.title : "Du lịch";
        return (
            <Header title={title}
                    leftView={
                        <TouchableOpacity onPress={this.props.onPress}>
                            <IconFont
                                name={'arrow-left2'}
                                size={20}
                                style={{color: '#fff'}}
                            />
                    </TouchableOpacity>}
                    rightView={null}
            />
        )
    }
}

