import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from "@expo/vector-icons" 

import Disciplina from '../disciplina'
import Solicitacao from '../solicitacao'
import Questao from '../questao'
import Perfil from '../perfil'


const Tabs = createBottomTabNavigator();

const TabsScreenProfessor = () => (
  <Tabs.Navigator
    initialRouteName="Disciplina"
    tabBarOptions={
      {
        activeTintColor: '#fff',
        inactiveTintColor: '#ccc',
        style: {
          backgroundColor: '#ae1b73',
          height: 70,
          paddingBottom: 12,
        },
      } 
    }
  >
    <Tabs.Screen
      name="Disciplina"
      component={Disciplina}
      options={
        {tabBarIcon : ({color}) => (
          <MaterialCommunityIcons
            name="book-open-outline"
            color={color}
            size={32}
          />
        )}
      }
    />
    <Tabs.Screen
      name="Solicitacao"
      component={Solicitacao}
      options={
        {tabBarIcon : ({color}) => (
          <MaterialCommunityIcons
            name="account-check-outline"
            color={color}
            size={32}
          />
        )}
      }
    />
    <Tabs.Screen
      name="Questao"
      component={Questao}
      options={
        {tabBarIcon : ({color}) => (
          <MaterialCommunityIcons
            name="frequently-asked-questions"
            color={color}
            size={32}
          />
        )}
      }
    />
    <Tabs.Screen
      name="Perfil"
      component={Perfil}
      options={
        {tabBarIcon : ({color}) => (
          <MaterialCommunityIcons
            name="account-outline"
            color={color}
            size={32}
          />
        )}
      }
    />
  </Tabs.Navigator>
)

export default TabsScreenProfessor;
