import React, {useEffect, useRef} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, ImageBackground} from 'react-native';
import {Helpers} from "../Theme";
import IconFont from "../lib/IconFont";
import * as Animatable from 'react-native-animatable';

const GridView = (props) => {
    const refView = useRef(null);

    const AnimateBounce = (refView, onAction, fadeIn) => () => {
        if (refView && refView.current) {
            refView.current.bounce(500).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));
            // refView.current.animate({ 0: { opacity: 0 }, 1: { opacity: 1 } });
            // refView.current.animate(fadeIn);
            // refView.current.transitionTo({ opacity: 0.9, scale: 1, rotateX: '70deg',  },5000);
            onAction();
        } else {
            onAction();
        }
    };
    const zoomOut = {
        0: {
            opacity: 1,
            scale: 1,
        },
        0.5: {
            opacity: 1,
            scale: 0.3,
        },
        1: {
            opacity: 1,
            scale: 0.3,
        },
    };

    const fadeIn = {
        from: {
            opacity: 0.5,
            scale: 0.54,
        },
        to: {
            opacity: 1,
            scale: 1,
        },
    };
    return (
        <Animatable.View
            ref={refView}
            animation={fadeIn}
            useNativeDriver={true}
            easing={'ease-in-cubic'}
            style={{
                width: props.width,
                height: props.width,
                aspectRatio: 1,
            }}>
            <TouchableOpacity style={[Helpers.margin, styles.container, {backgroundColor: props.backgroundColor}]}
                              disabled={false}
                              onPress={AnimateBounce(refView, props.onPress, zoomOut)}
            >
                <ImageBackground
                    style={styles.bgImage}
                    source={props.source} resizeMode={'contain'}/>
                <IconFont
                    name={props.icon}
                    size={20}
                    style={styles.icon}
                />
                <Text style={styles.title}>{props.title}</Text>
            </TouchableOpacity>
        </Animatable.View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 3
    },
    bgImage: {
        opacity: 0.2,
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    icon: {
        color: '#fff'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    }

});

export default GridView;
