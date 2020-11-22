import React, {useState} from 'react'
import {ImageBackground, StyleSheet, ActivityIndicator } from 'react-native'

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
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [carregando, setCarregando] = useState(false);
    const [esqueciSenha, setEsqueciSenha] = useState(false);

    function handleEntrar(){
        setCarregando(true);
        // console.warn(`${email} e ${senha}`);
        if (currentBtn === 'aluno' ) {
            navigation.push("SpaceTabsAluno")
        } else {
            navigation.push("SpaceTabsProfessor")
        }
        setCarregando(false);
    }

    function handleCadastrar(){
        setCarregando(true);
        // console.warn(`${email} e ${senha}`);
        if (currentBtn === 'aluno' ) {
            navigation.push("CadastroAluno");
        } else {
            navigation.push("CadastroProfessor");
        }
        setCarregando(false);
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
                        />
        
                        <InputTexto>Senha</InputTexto>
                        <Input 
                            placeholder="Digite sua senha"
                            secureTextEntry={true}
                            onChangeText={text => setSenha(text)}
                        />
        
                        <EsqueciSenhaBtn onPress={() => setEsqueciSenha(true)}>
                            <EsqueciSenhaTexto>Esqueci minha senha</EsqueciSenhaTexto>
                        </EsqueciSenhaBtn>
        
                        <ContainerCadEnter>
                            <CadEnterBtn invert={true} onPress={() => handleCadastrar()}>
                                {carregando ?
                                    <ActivityIndicator color="#ae1b7"/>
                                :
                                    <CadEnterTexto invert={true}>
                                        Cadastre-se
                                    </CadEnterTexto>
                                }
                            </CadEnterBtn>
        
                            <CadEnterBtn onPress={() => handleEntrar()}>
                                {carregando ?
                                    <ActivityIndicator color="#ae1b7"/>
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
                        />

                        <ContainerCadEnter>
                            <CadEnterBtn invert={true} onPress={() => setEsqueciSenha(false)}>
                                <CadEnterTexto invert={true}>Voltar</CadEnterTexto>
                            </CadEnterBtn>

                            <CadEnterBtn onPress={()=>{handleEntrar()}}>
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