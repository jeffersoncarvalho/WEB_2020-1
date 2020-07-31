import React, { Component } from 'react'

class CidadeEstado extends Component {

    constructor(props){
        super(props)
        /*this.fortaleza = 0
        this.quixada = 0
        this.sobral = 0*/
        this.state = {fortaleza:0, quixada: 0, sobral: 0}
    }

    render(){
        return(
            <div>
                <h2>Usando Estados</h2>
                <h3>Fortaleza: {this.state.fortaleza}</h3>
                <h3>Quixadá: {this.state.quixada}</h3>
                <h3>Sobral: {this.state.sobral}</h3>

                <button onClick={
                    ()=>{
                        
                        this.setState({fortaleza: this.state.fortaleza + 1})
                        //alert('FORTALEZA: ' + this.fortaleza)
                    }
                }>
                    Votar em Fortaleza
                </button>

                <button onClick={
                    ()=>{
                        
                        this.setState({quixada: this.state.quixada + 1})
                        //alert('FORTALEZA: ' + this.fortaleza)
                    }
                }>
                    Votar em Quixadá
                </button>

                <button onClick={
                    ()=>{
                        
                        this.setState({sobral: this.state.sobral + 1})
                        //alert('FORTALEZA: ' + this.fortaleza)
                    }
                }>
                    Votar em Sobral
                </button>
            </div>
        )
    }

}

export default CidadeEstado