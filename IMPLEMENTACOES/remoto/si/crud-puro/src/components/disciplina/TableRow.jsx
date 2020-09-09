import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class TableRow extends Component {

    constructor(props){
        super(props)

        this.apagar = this.apagar.bind(this)
    }

    apagar() {
        axios.delete('http://localhost:3002/disciplinas/delete/' + this.props.disciplina._id)
            .then(
                (res) => {
                    console.log('Registro apagado')
                    this.props.apagarElementoPorId(this.props.disciplina._id)
                })
            .catch((error) => console.log(error))
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.disciplina._id}
                </td>
                <td>
                    {this.props.disciplina.nome}
                </td>
                <td>
                    {this.props.disciplina.curso}
                </td>
                <td>
                    {this.props.disciplina.capacidade}
                </td>
                <td style={{ textAlign: "center" }}>
                    <Link to={`/edit/${this.props.disciplina._id}`} className="btn btn-primary">Editar</Link>
                </td>
                <td style={{ textAlign: "center" }}>
                    <button className="btn btn-danger" onClick={this.apagar}>Apagar</button>
                </td>
            </tr>
        )
    }
}