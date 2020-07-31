import React from 'react'

import Filho from './Filho'

export default (props) => {

    function caderno(mensagem) {
        alert('Meu filho escreveu: ' + mensagem)
    }

    return (
        <div>
            <Filho meuCaderno={caderno}/>   
        </div>
    )
}