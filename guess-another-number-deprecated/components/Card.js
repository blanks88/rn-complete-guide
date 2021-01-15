import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Card({ children, style }) {
    return (
        <View style={{ ...styles.card, ...style }}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowRadius: 6,
        elevation: 5
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
