import React, { useState, useContext } from 'react'

import {
    Container,
    Texto
} from './styles'
import { UsuarioContext } from '../../../../contexts/user';

const Dashboard = () => {
    const {user} = useContext(UsuarioContext);
    const {tipo} = useContext(UsuarioContext);

    return (
        <Container>
            <Texto>{user.email}</Texto>
            <Texto>{tipo}</Texto>
        </Container>
    )
}

export default Dashboard;