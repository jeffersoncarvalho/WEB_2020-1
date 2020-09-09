import React, { Component } from 'react'
import axios from 'axios'

export default class Edit extends Component {

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

    componentDidMount(){
        //axios.get(`http://localhost:3001/disciplinas/${this.props.match.params.id}`) //JSON-SERVER
        axios.get(`http://localhost:3002/disciplinas/retrieve/${this.props.match.params.id}`)
        .then(
            (response)=>{
                this.setState(
                    {
                        nome:response.data.nome,
                        curso:response.data.curso,
                        capacidade:response.data.capacidade
                    }
                )
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )
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

        axios.put(`http://localhost:3002/disciplinas/update/${this.props.match.params.id}`,disciplina)
        .then(
            (response)=>{
                this.props.history.push('/list')
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )
        
        this.setState({nome:'',curso:'',capacidade:0})
    } 

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Editar Disciplina</h3>
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
                        <input type="submit" value="Atualizar" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}