import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

export default function CategoriesScreen({ navigation }) {
    const renderGridItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.gridItem}
                onPress={() => {
                    navigation.navigate({
                        name: 'CategoryMeals',
                        params: {
                            categoryId: item.id,
                            title: item.title
                        }
                    });
                }}
            >
                <View>
                    <Text>{item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
            renderItem={renderGridItem}
            data={CATEGORIES}
            numColumns={2}
        />
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
