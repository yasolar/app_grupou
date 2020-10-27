import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Dashboard from '../dashboard'
import Grupo from '../grupo'
import Disciplina from '../disciplina'
import Skill from '../skill'
import Perfil from '../perfil'


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

const TabsScreenAluno = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Dashboard" component={DashboardStackScreen} />
    <Tabs.Screen name="Grupo" component={GrupoStackScreen} />
    <Tabs.Screen name="Disciplina" component={DisciplinaStackScreen} />
    <Tabs.Screen name="Skill" component={SkillStackScreen} />
    <Tabs.Screen name="Perfil" component={PerfilStackScreen} />
  </Tabs.Navigator>
)

export default TabsScreenAluno;
