import React, {Component} from 'react'

class CidadeSimples extends Component {

    constructor(props){
        super(props)
        this.state = {fortaleza:0, quixada:0, sobral:0}
        /*this.fortaleza = 0
        this.quixada = 0
        this.sobral = 0*/
    }

    render(){
        return(
            <div>
               Fortaleza: {this.state.fortaleza}<br/>
               Quixadá: {this.state.quixada}<br />
               Sobral: {this.state.sobral}<br />
               <button onClick={
                   ()=>{
                       //alert('TESTE')
                       //this.fortaleza = this.fortaleza + 1
                       //alert(this.fortaleza)
                       //ERRO: this.state.fortaleza = this.state.fortaleza + 1
                       this.setState({fortaleza: this.state.fortaleza + 1})
                   }
               }>
                   Votar em Fortaleza
               </button>
               <button onClick={()=>this.setState({quixada: this.state.quixada + 1})}> 
                   Votar em Quixadá
               </button>
               <button onClick={()=>this.setState({sobral: ++this.state.sobral})}>
                   Votar em Sobral
               </button>
            </div>
        )
    }

}

export default CidadeSimples