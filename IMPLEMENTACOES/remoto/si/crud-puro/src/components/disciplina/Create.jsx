import React, { Component } from 'react'
import axios from 'axios'

export default class Create extends Component {

    constructor(props) {
        super(props)
        this.state = {nome:'',curso:'',capacidade:0}

        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setCapacidade = this.setCapacidade.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        //TWO WAY DATA BIDING:
        //ONE WAY A -> MODIFICO O COMPOENENTE MUDO A INTERFACE GRÁFICA
        //ONE WAY B -> MODIFICAR A INTERFACE GRÁFICA E MUDAR O COMPONENTE
    }

    setNome(event){
        this.setState({nome:event.target.value})
    }

    setCurso(event){
        this.setState({curso:event.target.value})
    }

    setCapacidade(event){
        this.setState({capacidade: event.target.value})
    }

    onSubmit(event){
        event.preventDefault()

        const disciplina = {
            nome:this.state.nome,
            curso:this.state.curso,
            capacidade:this.state.capacidade}
        
        //ASSÍNCRONA!
        axios.post('http://localhost:3001/disciplinas',disciplina)
        .then(
            (response)=>{
                console.log('Disciplina inserida com sucesso!')
                console.log(response.data.id)
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )

        /*console.log('Nome: ' + this.state.nome)
        console.log('Curso: ' + this.state.curso)
        console.log('Capacidade: ' + this.state.capacidade)*/
        this.setState({nome:'',curso:'',capacidade:0})
    } 

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Criar Disciplina</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text" className="form-control" 
                            value={this.state.nome} onChange={this.setNome}
                        />
                    </div>
                    <div className="form-group">
                        <label>Curso: </label>
                        <input type="text" className="form-control"
                            value={this.state.curso} onChange={this.setCurso} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Capacidade: </label>
                        <input type="number" className="form-control"
                            value={this.state.capacidade} onChange={this.setCapacidade} 
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Criar" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}