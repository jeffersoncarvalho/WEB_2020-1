import React, { Component } from 'react'

class Filho extends Component {

    /*constructor(props){
        super(props)
    }*/

    render() {
        return (
            <div className='card' style={{width:'200px'}}>
                <div className='card-header' >
                    Informações do Estudante
                </div>
                <div className='card-body'>
                    Nome: {this.props.nome} <br />
                    Curso: {this.props.curso} <br />
                    Cidade: {this.props.cidade}
                </div>
            </div>
        )
    }

}

export default Filho