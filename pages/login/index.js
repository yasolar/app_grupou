import React, {useState, useContext} from 'react'
import {
    ImageBackground, StyleSheet, ActivityIndicator, View, 
    Modal, Text, TouchableHighlight, TextInput 
} from 'react-native'

import { UsuarioContext } from '../../contexts/user'
import {
    ContainerLogo,
    Logo,
    CaixaInfoChamada,
    InfoChamadaTexto,
    GrupouTexto,
    CaixaLogin,
    ContainerBtn,
    ProfAlunoBtn,
    ProfAlunoTexto,
    Input,
    InputTexto,
    EsqueciSenhaBtn,
    EsqueciSenhaTexto,
    ContainerCadEnter,
    CadEnterBtn,
    CadEnterTexto
} from './styles'

const Login = () => {
    const [currentBtn, setCurrentBtn] = useState('aluno');
    const [email, setEmail] = useState("1@aluno.unicarioca.com"); // 1@professor.unicarioca.com
    const [senha, setSenha] = useState("123456");
    const [carregando, setCarregando] = useState(false);
    const [esqueciSenha, setEsqueciSenha] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [nome, setNome] = useState('');

    const {signIn, signUp, setTipo} = useContext(UsuarioContext);

    function handleSignIn() {
        setCarregando(true);
        const emailAluno = email.indexOf('@aluno');
        const emailProf = email.indexOf('@professor');
        
        if (currentBtn === 'aluno' && emailAluno !== -1 ) {
            try{
                setTipo('aluno');
                signIn(email, senha);
            }catch(err){
                console.warn('login enter erro: ', err)
            }finally{
                setCarregando(false);
            }
        } else if (currentBtn === 'professor' && emailProf !== -1) {
            try{
                setTipo('professor');
                signIn(email, senha);
            }catch(err){
                console.warn('login enter erro: ', err)
            }finally{
                setCarregando(false);
            }
        } else {
            console.warn('Há informações incorretas!');
            setCarregando(false);
        }
    }

    function handleSignUp() {
        setCarregando(true);
        const emailAluno = email.indexOf('@aluno');
        const emailProf = email.indexOf('@professor');

        if (currentBtn === 'aluno' && emailAluno !== -1 ) {
            try{
                setTipo('aluno');
                setModalVisible(true);
            }catch(err){
                console.warn('login cad erro: ', err)
            }finally{
                setCarregando(false);
            }
            
        } else if (currentBtn === 'professor' && emailProf !== -1) {
            try{
                setTipo('professor');
                setModalVisible(true);
            }catch(err){
                console.warn('login cad erro: ', err)
            }finally{
            setCarregando(false);
            }
        } else {
            console.warn('Há informações incorretas!');
            setCarregando(false);
        }
    }

    return (
        <ImageBackground source={require('../../assets/background.png')} style={styles.imgBackgr}>
            <ContainerLogo>
                <Logo source={require('../../assets/logo.png')} />
            </ContainerLogo>

            <CaixaInfoChamada>
                <InfoChamadaTexto>
                    Problemas para formar
                </InfoChamadaTexto>
                <InfoChamadaTexto>
                    um grupo de trabalho?
                </InfoChamadaTexto>
                <InfoChamadaTexto>
                    O <GrupouTexto>Grupou!</GrupouTexto> resolve!
                </InfoChamadaTexto>
            </CaixaInfoChamada>
            
            <CaixaLogin>
                <ContainerBtn>
                    <ProfAlunoBtn
                        onPress={() => setCurrentBtn('aluno')}
                        lastClick={currentBtn === 'aluno' ? true : false}>
                        <ProfAlunoTexto lastClick={currentBtn === 'aluno' ? true : false}>
                            Aluno
                        </ProfAlunoTexto>
                    </ProfAlunoBtn>

                    <ProfAlunoBtn
                        onPress={() => setCurrentBtn('professor')}
                        lastClick={currentBtn === 'professor' ? true : false}>
                        <ProfAlunoTexto lastClick={currentBtn === 'professor' ? true : false}>
                            Professor
                        </ProfAlunoTexto>
                    </ProfAlunoBtn>
                </ContainerBtn>

                { !esqueciSenha ?
                    <>
                        <InputTexto>E-mail</InputTexto>
                        <Input 
                            placeholder="Digite seu e-mail"
                            onChangeText={text => setEmail(text)}
                            value={email}
                        />
        
                        <InputTexto>Senha</InputTexto>
                        <Input 
                            placeholder="Digite sua senha"
                            secureTextEntry={true}
                            onChangeText={text => setSenha(text)}
                            value={senha}
                        />
        
                        <EsqueciSenhaBtn onPress={() => setEsqueciSenha(true)}>
                            <EsqueciSenhaTexto>Esqueci minha senha</EsqueciSenhaTexto>
                        </EsqueciSenhaBtn>
        
                        <ContainerCadEnter>
                            <CadEnterBtn invert={true} onPress={() => handleSignUp()}>
                                {carregando ?
                                    <ActivityIndicator color="#ccc"/>
                                :
                                    <CadEnterTexto invert={true}>
                                        Cadastre-se
                                    </CadEnterTexto>
                                }
                            </CadEnterBtn>
        
                            <CadEnterBtn onPress={() => handleSignIn()}>
                                {carregando ?
                                    <ActivityIndicator color="#ccc"/>
                                :
                                    <CadEnterTexto>
                                        Entrar
                                    </CadEnterTexto>
                                }
                            </CadEnterBtn>
                        </ContainerCadEnter>

                        {/* Modal cadastro */}
                        <Modal animationType="slide" transparent={true} visible={modalVisible}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Insira abaixo as informações para cadastro:</Text>
                                    
                                    <TextInput style={styles.inputInfo} onChangeText={text => setNome(text)} value={nome} placeholder={'Nome'}/>
                                    <TextInput style={styles.inputInfo} onChangeText={text => setEmail(text)} value={email} placeholder={'E-mail'}/>
                                    <TextInput style={styles.inputInfo} onChangeText={text => setSenha(text)} value={senha} secureTextEntry={true} placeholder={'Senha'}/>
                                    
                                    <View style={styles.containerCadBtns}>
                                        <TouchableHighlight style={styles.btnTipo} onPress={() => {setModalVisible(!modalVisible);}}>
                                            <Text style={styles.textStyle}>Voltar</Text>
                                        </TouchableHighlight>

                                        <TouchableHighlight style={styles.btnTipo} onPress={() => {
                                            if (nome && email && senha) {
                                                setModalVisible(!modalVisible);
                                                signUp(email,senha,nome);
                                            } else {
                                                console.warn('Campo(s) não preenchido!');
                                            }
                                        }}>
                                            <Text style={styles.textStyle}>Cadastrar</Text>
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </>
                :
                    <>
                        <InputTexto>Informe seu e-mail para recuperação de senha:</InputTexto>
                        <Input 
                            placeholder="Digite seu e-mail"
                            onChangeText={text => setEmail(text)}
                            value={email}
                        />

                        <ContainerCadEnter>
                            <CadEnterBtn invert={true} onPress={() => setEsqueciSenha(false)}>
                                <CadEnterTexto invert={true}>Voltar</CadEnterTexto>
                            </CadEnterBtn>

                            <CadEnterBtn onPress={()=>{ console.warn('Recuperação de senha enviada!') }}>
                                <CadEnterTexto>Enviar</CadEnterTexto>
                            </CadEnterBtn>
                        </ContainerCadEnter>
                    </>
                }
            </CaixaLogin>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imgBackgr: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingTop: 10,
        paddingRight: 15,
        paddingLeft: 15,
        paddingBottom: 0,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.40,
        shadowRadius: 3.84,
        elevation: 5
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
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    containerCadBtns: {
        flexDirection: "row",
    }
})

export default Login;