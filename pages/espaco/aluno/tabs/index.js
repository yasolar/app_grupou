import React from 'react';
import { StyleSheet } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from "@expo/vector-icons" 

import Dashboard from '../dashboard'
import Grupo from '../grupo'
import Disciplina from '../disciplina'
import Skill from '../skill'
import Perfil from '../perfil'


const Tabs = createBottomTabNavigator();

const TabsScreenAluno = () => (
  <Tabs.Navigator 
    initialRouteName="Dashboard"
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
      name="Dashboard" 
      component={Dashboard}
      options={
        {tabBarIcon : ({color}) => (
          <MaterialCommunityIcons
            name="view-dashboard-outline"
            color={color}
            size={32}
          />
        )}
      }
    />
    <Tabs.Screen
      name="Grupo"
      component={Grupo}
      options={
        {tabBarIcon : ({color}) => (
          <MaterialCommunityIcons
            name="account-group-outline"
            color={color}
            size={32}
          />
        )}
      }
    />
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
      name="Skill"
      component={Skill}
      options={
        {tabBarIcon : ({color}) => (
          <MaterialCommunityIcons
            name="puzzle-outline"
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

export default TabsScreenAluno;
