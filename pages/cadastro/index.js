import React, {useState, useContext} from 'react'
import {ImageBackground, StyleSheet, Image, Text, Button } from 'react-native'
import { UsuarioContext } from '../../contexts/user';
import Login from '../login';

import {
    VoltarBtn,
    TextoBtn,
} from './styles'

const Cadastro = () => {
    const {signOut} = useContext(UsuarioContext);
    const {tipo} = useContext(UsuarioContext);

    return (
        <>
            {tipo === 'aluno' ?
                <>
                    <VoltarBtn onPress={() => {signOut()}}>
                        <TextoBtn>X</TextoBtn>
                    </VoltarBtn>
                        
                    <Text>Nome Completo</Text>
                    <Text>Email</Text>
                    <Text>Matricula</Text>
                    <Text>Curso</Text>
                    <Text>Senha</Text>
                    <Button title={'Cadastrar'} onClick={() => Login.push('/index')}></Button>
                </>
            :
                <>
                    <VoltarBtn onPress={() => {signOut()}}>
                        <TextoBtn>X</TextoBtn>
                    </VoltarBtn>
                        
                    <Text>Nome Completo</Text>
                    <Text>CPF</Text>
                    <Text>Email</Text>
                    <Text>Senha</Text>
                    <Button title={'Cadastrar'} onClick={() => Login.push('/index')}></Button>
                </>
            }
        </>
    )
}

export default Cadastro;