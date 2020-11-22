import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Disciplina from '../disciplina'
import Solicitacao from '../solicitacao'
import Questao from '../questao'
import Perfil from '../perfil'


const Tabs = createBottomTabNavigator();

const TabsScreenAluno = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Disciplina" component={Disciplina} />
    <Tabs.Screen name="Solicitacao" component={Solicitacao} />
    <Tabs.Screen name="Questao" component={Questao} />
    <Tabs.Screen name="Perfil" component={Perfil} />
  </Tabs.Navigator>
)

export default TabsScreenAluno;
