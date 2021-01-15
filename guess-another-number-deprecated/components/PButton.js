import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Color from '../constants/colors';

export default function PButton({ onPress, children, style, color, secondary }) {
    if (!color) color == 'primary';

    let buttonStyle = styles.primaryButton;
    let textStyle = styles.primaryButtonText;

    if (secondary) {
        buttonStyle = { ...buttonStyle, ...styles.secondaryButton };
        textStyle = { ...textStyle, ...styles.secondaryButtonText };
    }

    if (color == 'accent') {
        if (secondary) {
            buttonStyle = {
                ...buttonStyle,
                borderColor: Color.accent,
                backgroundColor: Color.accentReverse
            };
            textStyle = {
                ...textStyle,
                color: Color.accent,
            }
        } else {
            buttonStyle = {
                ...buttonStyle,
                backgroundColor: Color.accent
            };
            textStyle = {
                ...textStyle,
                color: Color.accentReverse,
            };
            console.log('buttonStyle', buttonStyle);
            console.log('textStyle', textStyle);
        }
    }

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
            <View style={{ ...buttonStyle, ...style }}>
                <Text style={textStyle}>{children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    primaryButton: {
        backgroundColor: Color.primay,
        paddingHorizontal: 20,
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 25,
    },
    primaryButtonText: {
        color: Color.primaryReverse,
        fontFamily: 'hack',
        fontSize: 18
    },
    secondaryButton: {
        borderWidth: 1,
        borderColor: Color.primay,
        backgroundColor: Color.primaryReverse,
    },
    secondaryButtonText: {
        color: Color.primay,
    },
})
