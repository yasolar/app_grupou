import 'react-native-gesture-handler';
import './services/firebase';
import React from 'react';

import Routes from './routes'
import { UsuarioProvider } from './contexts/user'

export default function App() {
  return (
    <UsuarioProvider>
      <Routes />
    </UsuarioProvider>
  );
}
