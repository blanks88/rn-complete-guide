import React from 'react'
import { StyleSheet, View } from 'react-native'

import Colors from '../constants/colors';
import PText from './PText';

export default function SelectedNumber({ children }) {
    return (
        <View style={styles.container}>
            <PText style={styles.number}>{children}</PText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderColor: Colors.accent,
        marginVertical: 10,
        borderRadius: 20,
        borderWidth: 4,
    },
    number: {
        color: Colors.accent,
        fontSize: 20,
        padding: 20
    }
})
