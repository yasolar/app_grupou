import React, {} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/login';
import Cadastro from '../pages/cadastro'

const Stack = createStackNavigator();

const AuthRoutes = () => {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />

            {/*Cadastro*/}
            <Stack.Screen name="Cadastro" component={Cadastro} />
        </Stack.Navigator>
    )
}

export default AuthRoutes;
