import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';

import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import RootScreen from '../screens/RootScreen';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

const MealsNavigator = () => {
    const headerOptions = {
        headerTintColor: Platform.OS === 'android' ? Colors.tint : Colors.primary,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
    const categoryMealsRouteOptions = ({ route }) => {
        const { title } = route.params;
        return { title }
    };

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={headerOptions}>
                <Stack.Screen name="Root" component={RootScreen} />
                <Stack.Screen name="Categories" component={CategoriesScreen} />
                <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} options={categoryMealsRouteOptions} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MealsNavigator

