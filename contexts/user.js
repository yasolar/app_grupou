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
            console.log('entrar: ', res)
        }).catch(err => {
            console.warn('Erro de senha e email entrar ==> ', err)
        })
    }

    const signUp = (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
            try{
                firebase.firestore().collection('users').doc(res.uid).add({
                    nome: newMsg,
                    lida: false,
                    data: today
                })
                setNewMsg('');
            }catch(err){
                console.warn('Erro no envio de msg ==> ', err);
            }
            
            console.warn('cadastro: ', res)
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