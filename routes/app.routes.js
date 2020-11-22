import React, {} from 'react'

import TabsScreenAluno from '../pages/espaco/aluno/tabs';
import TabsScreenProfessor from '../pages/espaco/professor/tabs';

// import Chat from '../pages/chat'
// import Settings from '../pages/settings'

const AppRoutes = () => {
    return (
        <>
            {false ?
                <TabsScreenAluno />
            :
                <TabsScreenProfessor />
            }
        </>
    )
}

export default AppRoutes;