import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Dashboard from '../dashboard'
import Grupo from '../grupo'
import Disciplina from '../disciplina'
import Skill from '../skill'
import Perfil from '../perfil'


const Tabs = createBottomTabNavigator();

const TabsScreenAluno = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Dashboard" component={Dashboard}/>
    <Tabs.Screen name="Grupo" component={Grupo} />
    <Tabs.Screen name="Disciplina" component={Disciplina} />
    <Tabs.Screen name="Skill" component={Skill} />
    <Tabs.Screen name="Perfil" component={Perfil} />
  </Tabs.Navigator>
)

export default TabsScreenAluno;
