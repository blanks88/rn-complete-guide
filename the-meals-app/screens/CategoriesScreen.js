import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

export default function CategoriesScreen({ navigation }) {
    const renderGridItem = ({ item }) => {
        const { color, id, title } = item;
        return (
            <CategoryGridTile
                title={title}
                style={{
                        backgroundColor: color
                    }}
                onSelect={() => {
                    navigation.navigate({
                        name: 'CategoryMeals',
                        params: {
                            categoryId: id,
                            title: title
                        }
                    });
                }}
            />
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
