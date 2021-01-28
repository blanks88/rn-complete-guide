import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function CategoriesScreen() {
    return (
        <View style={styles.screen}>
            <Text>Categories</Text>
            <Button title="Next page" />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
