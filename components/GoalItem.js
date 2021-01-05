import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export default function GoalItem({ item, onDeleteHandler }) {
    return (
        <TouchableOpacity
            activeOpacity="0.8"
            onLongPress={onDeleteHandler.bind(this, item)}
        >
            <View style={styles.goalItem}>
                <Text>{item.name}</Text>
            </View>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#cccc',
    }
})
