import React, { Component } from 'react'

class MinhaClasse extends Component {
    render(){
        return (
            <div>
                Minha primeira Classe em React!
                <br />
                Eu sou o {this.props.nome}
            </div>
        )
    }
}

export default MinhaClasse