import React, { Component } from 'react'

import FirebaseContext from '../utils/FirebaseContext'
import FirebaseService from '../services/FirebaseService'

const EditPage = (props) => (
    <FirebaseContext.Consumer>
        {firebase => <Edit firebase={firebase} id={props.match.params.id} />}
    </FirebaseContext.Consumer>
)

class Edit extends Component {

    constructor(props) {
        super(props)

        this.state = { nome: '', curso: '', IRA: '' }

        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setIRA = this.setIRA.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        FirebaseService.retrieve(this.props.firebase.getFirestore(),
            (estudante) => {
                if (estudante)
                    this.setState({
                        nome: estudante.nome,
                        curso: estudante.curso,
                        IRA: estudante.IRA
                    })
            },
            this.props.id
        )
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    setCurso(e) {
        this.setState({ curso: e.target.value })
    }

    setIRA(e) {
        this.setState({ IRA: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        FirebaseService.edit(
            this.props.firebase.getFirestore(),
            (mensagem) => {
                console.log(mensagem)
            },
            this.props.id,
            {
                nome: this.state.nome,
                curso: this.state.curso,
                IRA: this.state.IRA
            }
        )
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Editar Estudante</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text" className="form-control"
                            value={this.state.nome} onChange={this.setNome} />
                    </div>
                    <div className="form-group">
                        <label>Curso: </label>
                        <input type="text" className="form-control"
                            value={this.state.curso} onChange={this.setCurso} />
                    </div>
                    <div className="form-group">
                        <label>IRA: </label>
                        <input type="text" className="form-control"
                            value={this.state.IRA} onChange={this.setIRA} />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Editar Estudante" className="btn btn-primary" />
                    </div>
                </form>

            </div>
        )
    }
}

export default EditPage