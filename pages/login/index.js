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
    CadastrarBtn,
    CadastrarTexto,
    EntrarBtn,
    EntrarTexto,
    Logo,
    ContainerLogo
} from './styles'

const Login = () => {
    const [currentBtn, setCurrentBtn] = useState('aluno');
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

                <InputTexto>E-mail</InputTexto>
                <Input />

                <InputTexto>Senha</InputTexto>
                <Input />

                <EsqueciSenhaBtn>
                    <EsqueciSenhaTexto>Esqueci minha senha</EsqueciSenhaTexto>
                </EsqueciSenhaBtn>

                <ContainerBtn>
                    <CadastrarBtn>
                        <CadastrarTexto>Cadastre-se</CadastrarTexto>
                    </CadastrarBtn>

                    <EntrarBtn>
                        <EntrarTexto>Entrar</EntrarTexto>
                    </EntrarBtn>
                </ContainerBtn>
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