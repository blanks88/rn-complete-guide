import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import CategoriesScreen from '../screens/CategoriesScreen';
import RootScreen from '../screens/RootScreen';

const Stack = createStackNavigator();

const MealsNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Root" component={RootScreen} />
                <Stack.Screen name="Categories" component={CategoriesScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MealsNavigator

