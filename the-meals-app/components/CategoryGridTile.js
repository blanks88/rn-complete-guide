import React from 'react'
import { Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'

const CategoryGridTile = ({ onSelect, style, title }) => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }

    return (
        <View style={styles.gridItem}>
            <TouchableCmp
                style={{ flex: 1 }}
                onPress={onSelect}
            >
                <View style={{ ...styles.container, ...style }}>
                    <Text style={styles.title} numberOfLines={2}>{title}</Text>
                </View>
            </TouchableCmp>
        </View>
    )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 7,
        height: 150,
    },
    container: {
        padding: 7,
        borderRadius: 10,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowRadius: 10,
        elevation: 3,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flex: 1,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22
    }
})
