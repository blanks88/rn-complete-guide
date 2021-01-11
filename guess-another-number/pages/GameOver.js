import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function GameOver({ totalRounds, selectedNuber, onReset }) {
    return (
        <View style={styles.page}>
            <Text style={styles.pageTitle}> The Game is Over!</Text>
            <Text>Number of rounds: { totalRounds }</Text>
            <Text>The number was: { selectedNuber }</Text>
            <Button title="RESET" onPress={onReset} />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    pageTitle: {
        fontSize: 25,
        marginVertical: 30
    },
})
