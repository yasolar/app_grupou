import React, {useState, useContext} from 'react'
import {ImageBackground, StyleSheet, Image, Text } from 'react-native'
import { UsuarioContext } from '../../contexts/user'

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
                </>
            }
        </>
    )
}

export default Cadastro;