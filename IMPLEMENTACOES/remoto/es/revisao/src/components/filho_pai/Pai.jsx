import React from 'react'

import Filho from './Filho' 

export default props => {

    function mensagemDoFilho(msg){
        alert('O MEU FILHO DISSE: ' + msg)
    }

    return(
        <div>
            <Filho mensagemProMeuPai={mensagemDoFilho}/>
        </div>
    )
}