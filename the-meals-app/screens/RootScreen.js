import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native'

const RootScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.screen}>
            <Text>Root</Text>
            <Button title="Go to Meals" onPress={() => navigation.navigate({ name: 'Categories'})} />
        </SafeAreaView>
    )
}

export default RootScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
})
