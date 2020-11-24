import React, { createContext, useState, useEffect } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableHighlight, Modal } from 'react-native';
import firebase from 'firebase';
import 'firebase/auth';

const UsuarioContext = createContext({});

const UsuarioProvider = ({children}) => {
    const [user, setUser] = useState('');
    const [tipo, setTipo] = useState('aluno');
    const today = new Date();

    const ListenAuth = (userState) => {
        setUser(userState);
    }

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged(ListenAuth);
        return listener
    },[])

    const signIn = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
            console.log('entrar: ', res)
        }).catch(err => {
            console.warn('Erro de senha e email entrar ==> ', err)
        })
    }

    const signUp = (email, password, nome) => {
        const emailAluno = email.indexOf('@aluno');
        firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
            firebase.firestore().collection('users').doc(res.user.uid).set({
                nome: nome,
                email: email,
                grupos: emailAluno !== -1 ? 
                    ['/turmas/o12w8HwMmJXTzhCXwly7/grupos/LFNPbNRVhwpqiXEmAJmY',
                    '/turmas/NXNpUFVrzfhe8HREbbha/grupos/VkjHjs9sEXyo5t8pNdqE',
                    '/turmas/L3bf6284cl3ZToqnEK8w/grupos/3Ls4tOv65qYnoyw2uA1g'] 
                : false,
                data: today
            }).catch(err => {
                console.warn('Erro de criação de user ==> ', err)
            })
        }).catch(err => {
            console.warn('Erro de senha e email cadastrar ==> ', err)
        })
    }

    const signOut = () => {
        firebase.auth().signOut().then(res => {
            console.log('sair: ', res)
        }).catch(err => {
            console.warn('Erro de senha e email sair ==> ', err)
        })
    }

    return(
        <UsuarioContext.Provider value={{user, tipo, setTipo, signIn, signUp, signOut}}>
            {children}
        </UsuarioContext.Provider>
    )
}

export { UsuarioContext, UsuarioProvider }