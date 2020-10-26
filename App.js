import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Login from './pages/login';
import Dashboard from './pages/espaco-aluno/dashboard'
import Grupo from './pages/espaco-aluno/grupo'
import Disciplina from './pages/espaco-aluno/disciplina'
import Skill from './pages/espaco-aluno/skill'
import Perfil from './pages/espaco-aluno/perfil'


const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const DashboardStack = createStackNavigator();
const GrupoStack = createStackNavigator();
const DisciplinaStack = createStackNavigator();
const SkillStack = createStackNavigator();
const PerfilStack = createStackNavigator();

const DashboardStackScreen = () => (
  <DashboardStack.Navigator>
    <DashboardStack.Screen name="Dashboard" component={Dashboard} />
  </DashboardStack.Navigator>
)
const GrupoStackScreen = () => (
  <GrupoStack.Navigator>
    <GrupoStack.Screen name="Grupo" component={Grupo} />
  </GrupoStack.Navigator>
)
const DisciplinaStackScreen = () => (
  <DisciplinaStack.Navigator>
    <DisciplinaStack.Screen name="Disciplina" component={Disciplina} />
  </DisciplinaStack.Navigator>
)
const SkillStackScreen = () => (
  <SkillStack.Navigator>
    <SkillStack.Screen name="Skill" component={Skill} />
  </SkillStack.Navigator>
)
const PerfilStackScreen = () => (
  <PerfilStack.Navigator>
    <PerfilStack.Screen name="Perfil" component={Perfil} />
  </PerfilStack.Navigator>
)

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Dashboard" component={DashboardStackScreen} />
    <Tabs.Screen name="Grupo" component={GrupoStackScreen} />
    <Tabs.Screen name="Disciplina" component={DisciplinaStackScreen} />
    <Tabs.Screen name="Skill" component={SkillStackScreen} />
    <Tabs.Screen name="Perfil" component={PerfilStackScreen} />
  </Tabs.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SpaceTabs" component={TabsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
