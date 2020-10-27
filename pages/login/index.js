import React, {useState} from 'react'
import {ImageBackground, StyleSheet, Image } from 'react-native'

import {
    CaixaLogin,
    ContainerBtn,
    Btn,
    BtnTexto,
    Input,
    InputTexto,
    EsqueciSenhaBtn,
    EsqueciSenhaTexto,
    ContainerAbaixoBtn,
    DireitoBtn,
    DireitoTexto,
    EsquerdoBtn,
    EsquerdoTexto,
    Logo,
    ContainerLogo
} from './styles'

const Login = ({navigation}) => {
    const [currentBtn, setCurrentBtn] = useState('aluno');
    const [esqueciSenha, setEsqueciSenha] = useState(false);

    return (
        <ImageBackground source={require('../../assets/background.png')} style={styles.imgBackgr}>
            <ContainerLogo>
                <Logo source={require('../../assets/logo.png')} />
            </ContainerLogo>
            
            <CaixaLogin>
                <ContainerBtn>
                    <Btn
                        onPress={() => setCurrentBtn('aluno')}
                        lastClick={currentBtn === 'aluno' ? true : false}>
                        <BtnTexto lastClick={currentBtn === 'aluno' ? true : false}>Aluno</BtnTexto>
                    </Btn>

                    <Btn
                        onPress={() => setCurrentBtn('professor')}
                        lastClick={currentBtn === 'professor' ? true : false}>
                        <BtnTexto lastClick={currentBtn === 'professor' ? true : false}>Professor</BtnTexto>
                    </Btn>
                </ContainerBtn>

                { !esqueciSenha ?
                    <>
                        <InputTexto>E-mail</InputTexto>
                        <Input />
        
                        <InputTexto>Senha</InputTexto>
                        <Input secureTextEntry={true}/>
        
                        <EsqueciSenhaBtn onPress={() => setEsqueciSenha(true)}>
                            <EsqueciSenhaTexto>Esqueci minha senha</EsqueciSenhaTexto>
                        </EsqueciSenhaBtn>
        
                        <ContainerAbaixoBtn>
                            <DireitoBtn onPress={() => {
                                    if (currentBtn === 'aluno' ) {
                                        navigation.push("CadastroAluno")
                                    } else {
                                        navigation.push("CadastroProfessor")
                                    }
                                }}>
                                <DireitoTexto>Cadastre-se</DireitoTexto>
                            </DireitoBtn>
        
                            <EsquerdoBtn onPress={() => {
                                    if (currentBtn === 'aluno' ) {
                                        navigation.push("SpaceTabsAluno")
                                    } else {
                                        navigation.push("SpaceTabsProfessor")
                                    }
                                }}>
                                <EsquerdoTexto>Entrar</EsquerdoTexto>
                            </EsquerdoBtn>
                        </ContainerAbaixoBtn>
                    </>
                :
                    <>
                        <InputTexto>Informe seu e-mail para recuperação de senha:</InputTexto>
                        <Input />

                        <ContainerAbaixoBtn>
                            <DireitoBtn onPress={() => setEsqueciSenha(false)}>
                                <DireitoTexto>Voltar</DireitoTexto>
                            </DireitoBtn>

                            <EsquerdoBtn>
                                <EsquerdoTexto>Enviar</EsquerdoTexto>
                            </EsquerdoBtn>
                        </ContainerAbaixoBtn>
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
    }
})

export default Login;