import React, { Component } from 'react'
import axios from 'axios'

export default class Create extends Component {

    constructor(props) {
        super(props)
        this.state = { nome: '', curso: '', capacidade: 0 }

        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setCapacidade = this.setCapacidade.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    setNome(e) {
        this.setState({nome:e.target.value})
    }

    setCurso(e) {
        this.setState({curso:e.target.value})
    }

    setCapacidade(e) {
        this.setState({capacidade:e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()

        const disciplina = {
            nome: this.state.nome,
            curso: this.state.curso,
            capacidade: parseInt(this.state.capacidade,10)
        }

        //axios.post('http://localhost:3001/disciplinas',disciplina) //JSON-SERVER
        axios.post('http://localhost:3002/disciplinas/register',disciplina) //EXPRESS PURO 
        .then(
            (res)=>{
                console.log('Disciplina salva com sucesso!')
                console.log(res.data._id)
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

        this.setState({nome: '', curso: '', capacidade: 0})
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
                            value={this.state.curso} onChange={this.setCurso}/>
                    </div>
                    <div className="form-group">
                        <label>Capacidade: </label>
                        <input type="number" className="form-control" 
                            value={this.state.capacidade} onChange={this.setCapacidade}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Criar" className="btn btn-primary" 
                        />
                    </div>
                </form>
            </div>
        )
    }
}