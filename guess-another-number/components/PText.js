import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function PText({ children, style }) {
    return (
        <Text style={{ ...styles.default, ...style }}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    default: {
        fontFamily: 'hack',
        fontSize: 18
    }
})
