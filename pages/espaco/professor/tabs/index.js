import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Disciplina from '../disciplina'
import Solicitacao from '../solicitacao'
import Questao from '../questao'
import Perfil from '../perfil'


const Tabs = createBottomTabNavigator();
const DisciplinaStack = createStackNavigator();
const SolicitacaoStack = createStackNavigator();
const QuestaoStack = createStackNavigator();
const PerfilStack = createStackNavigator();

const DisciplinaStackScreen = () => (
    <DisciplinaStack.Navigator>
      <DisciplinaStack.Screen name="Disciplina" component={Disciplina} />
    </DisciplinaStack.Navigator>
  )
const SolicitacaoStackScreen = () => (
  <SolicitacaoStack.Navigator>
    <SolicitacaoStack.Screen name="Solicitacao" component={Solicitacao} />
  </SolicitacaoStack.Navigator>
)
const QuestaoStackScreen = () => (
  <QuestaoStack.Navigator>
    <QuestaoStack.Screen name="Questao" component={Questao} />
  </QuestaoStack.Navigator>
)
const PerfilStackScreen = () => (
  <PerfilStack.Navigator>
    <PerfilStack.Screen name="Perfil" component={Perfil} />
  </PerfilStack.Navigator>
)

const TabsScreenAluno = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Disciplina" component={DisciplinaStackScreen} />
    <Tabs.Screen name="Solicitacao" component={SolicitacaoStackScreen} />
    <Tabs.Screen name="Questao" component={QuestaoStackScreen} />
    <Tabs.Screen name="Perfil" component={PerfilStackScreen} />
  </Tabs.Navigator>
)

export default TabsScreenAluno;
