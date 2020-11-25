import React, { useContext } from 'react';

import TabsScreenAluno from '../pages/espaco/aluno/tabs';
import TabsScreenProfessor from '../pages/espaco/professor/tabs';
import { UsuarioContext } from '../contexts/user';

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