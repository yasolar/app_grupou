import React, {useState, useContext} from 'react'
import {ImageBackground, StyleSheet, ActivityIndicator, View } from 'react-native'

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

const Login = ({navigation}) => {
    const [currentBtn, setCurrentBtn] = useState('aluno');
    const [email, setEmail] = useState("1@aluno.unicarioca.com"); // 1@professor.unicarioca.com
    const [senha, setSenha] = useState("123456");
    const [carregando, setCarregando] = useState(false);
    const [esqueciSenha, setEsqueciSenha] = useState(false);

    const {signIn, signUp, setTipo} = useContext(UsuarioContext);

    function handleSignIn(){
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

    function handleSignUp(){
        setCarregando(true);
        const emailAluno = email.indexOf('@aluno');
        const emailProf = email.indexOf('@professor');

        if (currentBtn === 'aluno' && emailAluno !== -1 ) {
            try{
                setTipo('aluno');
                navigation.push('Cadastro');
                // signUp(email, senha);
            }catch(err){
                console.warn('login cad erro: ', err)
            }finally{
                setCarregando(false);
            }
            
        } else if (currentBtn === 'professor' && emailProf !== -1) {
            try{
                setTipo('professor');
                signUp(email, senha);
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
    }
})

export default Login;