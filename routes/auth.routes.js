import React, {} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/login'

const Stack = createStackNavigator();

const AuthRoutes = () => {
    return (
        <Login />
    )
}

export default AuthRoutes;
