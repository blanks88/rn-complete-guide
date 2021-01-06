import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Colors from '../constants/colors';

export default function SelectedNumber({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{children}</Text>
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
