import React, { Component } from 'react'

class CidadeSimples extends Component {

    constructor(props){
        super(props)
        this.fortaleza = 0
        this.quixada = 0
        this.sobral = 0
    }

    render(){
        return(
            <div>
                <h3>Fortaleza: {this.fortaleza}</h3>
                <h3>Quixadá: {this.quixada}</h3>
                <h3>Sobral: {this.sobral}</h3>

                <button onClick={
                    ()=>{
                        
                        this.fortaleza = this.fortaleza + 1
                        alert('FORTALEZA: ' + this.fortaleza)
                    }
                }>
                    Votar em Fortaleza
                </button>

                <button>Votar em Quixadá</button>
                <button>Votar em Sobral</button>
            </div>
        )
    }

}

export default CidadeSimples