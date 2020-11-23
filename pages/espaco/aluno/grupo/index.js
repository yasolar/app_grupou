import React, {useState, useContext, useEffect} from 'react'
import { ScrollView } from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';

import { UsuarioContext } from '../../../../contexts/user'
import {
    Container,
    CaixaBranca,
    Texto,
    InputTexto,
    Conversa,
    Mensagem,
    Envio,
    Input,  
    ContainerBtn,
    EnviarBtn,
    TextoBtn
} from './styles'

const Grupo = (props) => {
    const [messages, setMessages] = useState([]);
    const [newMsg, setNewMsg] = useState("");
    const user = firebase.auth().currentUser;
    const today = new Date();

    const ListenerUpdateMsg = (snap) => {
        const data = snap.docs.map(doc => {
            return{
                id: doc.id,
                ...doc.data()
            }
        })
        setMessages(data);
    }

    useEffect(() => {
        const listener = firebase.firestore().collection('mensagens').doc(user.uid)
            .collection('msg').onSnapshot(ListenerUpdateMsg);
    },[])

    const handleAddMsg = () => {
        if (newMsg === "") {
            console.warn('Mensagem vazia!');
            return;
        }
        try{
            firebase.firestore().collection('mensagens').doc(user.uid).collection('msg').add({
                texto: newMsg,
                lida: false,
                data: today
            })
            setNewMsg('');
        }catch(err){
            console.warn('Erro no envio de msg ==> ', err);
        }
    }

    return (
        <Container>
            <CaixaBranca>
                <Conversa>
                    <ScrollView>
                        {messages.map(msg => (
                            <Mensagem>- {msg.texto}</Mensagem>
                        ))}
                    </ScrollView>
                </Conversa>
                <Envio>
                    <Input 
                        placeholder="Digite sua mensagem"
                        onChangeText={text => {setNewMsg(text)}}
                        value={newMsg}
                    />
                </Envio>
                <ContainerBtn>
                    <EnviarBtn onPress={() => { handleAddMsg() }}>
                        <TextoBtn>Enviar</TextoBtn>
                    </EnviarBtn>
                </ContainerBtn>
            </CaixaBranca>
        </Container>
    )
}

export default Grupo;