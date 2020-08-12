import React, {Component} from 'react'

import Filho from './Filho'

class Pai extends Component {

    /*constructor(props){
        super(props)
    }*/

    render(){
        return (
            <div>
                <Filho nome='Fulano com Classe'
                       curso='Informática'
                       cidade='São Paulo'/>
            </div>
        )
    }

}

export default Pai