import React, { Component } from 'react'

class Signin extends Component {

    constructor(props) {
        super(props)
        this.state = { login: '', password: '' }

        this.setLogin = this.setLogin.bind(this)
        this.setPassword = this.setPassword.bind(this)
    }

    setLogin(e) {
        this.setState({ login: e.target.value })
    }

    setPassword(e) {
        this.setState({ password: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        this.setState({ login: '', password: '' })
    }

    render() {
        return (
            <div className='content'>
                <div className='card'>
                    <div className="card-header">
                        Sign-In
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Login: </label>
                                <input type="text" className="form-control"
                                    value={this.state.login} onChange={this.setLogin} />
                            </div>
                            <div className="form-group">
                                <label>Senha: </label>
                                <input type="password" className="form-control"
                                    value={this.state.password} onChange={this.setPassword} />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Efetuar Login" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin