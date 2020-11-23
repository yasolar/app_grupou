import React, {useState, useContext} from 'react'

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

const Grupo = () => {
    const {user} = useContext(UsuarioContext);

    return (
        <Container>
            <CaixaBranca>
                <Conversa>
                    <Mensagem>oiiie :)</Mensagem>
                </Conversa>
                <Envio>
                    <Input 
                        placeholder="Digite sua mensagem"
                        onChangeText={() => {}}
                        value={''}
                    />
                </Envio>
                <ContainerBtn>
                    <EnviarBtn onPress={() => {  }}>
                        <TextoBtn>Enviar</TextoBtn>
                    </EnviarBtn>
                </ContainerBtn>
            </CaixaBranca>
        </Container>
    )
}

export default Grupo;