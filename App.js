import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Login from './pages/login';
import TabsScreenAluno from './pages/espaco/aluno/tabs';
import TabsScreenProfessor from './pages/espaco/professor/tabs';
import CadastroAluno from './pages/cadastro/aluno';
import CadastroProfessor from './pages/cadastro/professor';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SpaceTabsAluno" component={TabsScreenAluno} />
        <Stack.Screen name="SpaceTabsProfessor" component={TabsScreenProfessor} />

        {/* Cadastros */}
        <Stack.Screen name="CadastroAluno" component={CadastroAluno} />
        <Stack.Screen name="CadastroProfessor" component={CadastroProfessor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
