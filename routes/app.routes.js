import React, { useContext } from 'react';

import TabsScreenAluno from '../pages/espaco/aluno/tabs';
import TabsScreenProfessor from '../pages/espaco/professor/tabs';
import { UsuarioContext } from '../contexts/user';

// import Chat from '../pages/chat'
// import Settings from '../pages/settings'

const AppRoutes = () => {
    const {tipo} = useContext(UsuarioContext);

    return (
        <>
            {tipo === 'aluno' ?
                <TabsScreenAluno />
            :
                <TabsScreenProfessor />
            }
        </>
    )
}

export default AppRoutes;