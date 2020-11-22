import React, { createContext, useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/auth';

const UsuarioContext = createContext({});

const UsuarioProvider = ({children}) => {
    const [user, setUser] = useState('Marcele');
    const [tipo, setTipo] = useState('aluno');

    const ListenAuth = (userState) => {
        setUser(userState);
    }

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged(ListenAuth);
        return listener
    },[])

    const signIn = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
            console.warn('entrar: ', res)
        }).catch(err => {
            console.warn('Erro de senha e email entrar ==> ', err)
        })
    }

    const signUp = (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
            console.warn('cadastro: ', res)
        }).catch(err => {
            console.warn('Erro de senha e email cadastrar ==> ', err)
        })
    }

    const signOut = () => {
        firebase.auth().signOut().then(res => {
            console.warn('sair: ', res)
        }).catch(err => {
            console.warn('Erro de senha e email sair ==> ', err)
        })
    }

    return(
        <UsuarioContext.Provider value={{user, tipo, signIn, signUp, signOut}}>
            {children}
        </UsuarioContext.Provider>
    )
}

export { UsuarioContext, UsuarioProvider }