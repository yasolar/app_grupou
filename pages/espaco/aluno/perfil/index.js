import React, {useState, useContext} from 'react'

import { UsuarioContext } from '../../../../contexts/user'
import {
    Container,
    Texto,
    ContainerBtn,
    SairBtn,
    TextoBtn
} from './styles'

const Perfil = () => {
    const {signOut} = useContext(UsuarioContext);

    const sair = () => {signOut()}

    return (
        <Container>
            <Texto>PerfilAluno</Texto>
            <ContainerBtn>
                <SairBtn onPress={() => { signOut() }}>
                    <TextoBtn>Sair</TextoBtn>
                </SairBtn>
            </ContainerBtn>
        </Container>
    )
}

export default Perfil;