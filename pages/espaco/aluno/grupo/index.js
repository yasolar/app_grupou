import React, {useState, useEffect} from 'react'
import { ScrollView, StyleSheet,View, Modal, Text, TouchableHighlight} from 'react-native'
import firebase from 'firebase';
import 'firebase/firestore';

import {
    Container,
    CaixaBranca,
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
    const user = firebase.auth().currentUser;
    const [turmas, setTurmas] = useState([]);
    const [caminhoGrupos, setCaminhoGrupo] = useState([]);
    const [caminhoTodoChat, setCaminhoTodoChat] = useState("turmas");
    const [modalVisible, setModalVisible] = useState(false);
    const [nomeUser, setNomeUser] = useState("");
    const [messages, setMessages] = useState([]);
    const [newMsg, setNewMsg] = useState("");
    const today = new Date();
    let arrayTurmasId = [];
    let arrayTurmasNome = [];
    let arrayCaminhoGrupos = [];
    let caminhoChat;

    function handleChatPorTurma(turma) {
        setMessages([]);
        try{
            caminhoGrupos.forEach( caminho => {
                if (caminho.split('/')[2] === turma.id) {
                    caminhoChat = caminho + '/chat';
                }
            })
            setCaminhoTodoChat(caminhoChat);
            firebase.firestore().collection(caminhoTodoChat).onSnapshot(ListenerUpdateMsg);
        }catch(err){
            console.warn('chatPorTurma erro: ', err)
        }
    }

    const GruposPorId = (data) => {
        return data.id === user.uid;
    }

    const ListenerNomeTurmas = (snap) => {
        const data = snap.docs.map(doc => {
            return{
                id: doc.id,
                ...doc.data()
            }
        });

        if (data) {
            data.forEach(turma => {
                const turmaDoAluno = arrayTurmasId.indexOf(turma.id);
                if (turmaDoAluno !== -1) {
                    arrayTurmasNome.push({nome: turma.nome, numero: turma.numero, id: turma.id});
                }
            });
            setTurmas(arrayTurmasNome);
        } else {
            setTurmas([]);
        }
        return;
    }

    const ListenerListaTurma = (snap) => {    
        const data = snap.docs.map(doc => {
            return{
                id: doc.id,
                ...doc.data()
            }
        });

        if (data) {
            const userFind = data.find(GruposPorId);
            const sliptNome = userFind.nome.split(" ")[0];
            setNomeUser(sliptNome);

            if (userFind.grupos) {
                userFind.grupos.forEach(grupo => {
                    arrayTurmasId.push(grupo.split('/')[2]);
                    arrayCaminhoGrupos.push(grupo);
                });
                setTurmas(arrayTurmasId);
                setCaminhoGrupo(arrayCaminhoGrupos);
            }
        }
    }

    const ListenerUpdateMsg = (snap) => {
        setMessages([]);
        if (caminhoTodoChat === 'turmas') { console.log('entrou na modal'); return; }
        const data = snap.docs.map(doc => {
            return{
                id: doc.id,
                ...doc.data()
            }
        })
        data.sort(function(a,b){
            return b.data < a.data ? 1 : -1;
        });
        try{
            setMessages(data);
        }catch(err){
            console.warn('updateMsg erro: ', err)
        }finally{
            setModalVisible(true);
        }
    }

    useEffect(() => {
        const listenerGrupo = firebase.firestore().collection('users').onSnapshot(ListenerListaTurma);
        const listenerTurma = firebase.firestore().collection('turmas').onSnapshot(ListenerNomeTurmas);
    },[])

    const handleAddMsg = () => {
        if (newMsg === "") {
            console.warn('Mensagem vazia!');
            return;
        }
        try{
            firebase.firestore().collection(caminhoTodoChat).add({
                autor: user.uid,
                nomeAutor: nomeUser,
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
                {turmas.length > 0 ?
                    <ContainerBtn>
                        <InputTexto>Turmas:</InputTexto>
                            {turmas.map(turma => (
                                <EnviarBtn onPress={() => {handleChatPorTurma(turma);}}>
                                <TextoBtn>{turma.nome} - {turma.numero}</TextoBtn>
                                </EnviarBtn>
                            ))}
                    </ContainerBtn>
                :
                    <ContainerBtn>
                        <InputTexto>Sem turmas no momento</InputTexto>
                    </ContainerBtn>
                }
            </CaixaBranca>

            {/* Modal chat */}
            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Chat:</Text>
                            <Conversa>
                                <ScrollView>
                                    {messages.map(msg => (
                                        <Mensagem>{msg.nomeAutor}: {msg.texto}</Mensagem>
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

                            <View style={styles.containerCadBtns}>
                                <TouchableHighlight style={styles.btnTipo} onPress={() => {
                                    setModalVisible(!modalVisible);
                                    setMessages([]);
                                }}>
                                    <Text style={styles.textStyle}>Voltar</Text>
                                </TouchableHighlight>

                                <TouchableHighlight style={styles.btnTipo} onPress={() => { handleAddMsg(); }}>
                                    <Text style={styles.textStyle}>Enviar</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </Modal>
        </Container>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.40,
        shadowRadius: 3.84,
        elevation: 5,
        width: 300,
        height: 400
    },
    inputInfo: {
        borderRadius: 4,
        borderWidth: 1.5,
        borderColor: "#ae1b73",
        width: 200,
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    btnTipo: {
        backgroundColor: "#ae1b73",
        borderRadius: 10,
        padding: 15,
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 20
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "#ae1b73"
    },
    containerCadBtns: {
        flexDirection: "row",
    }
})

export default Grupo;