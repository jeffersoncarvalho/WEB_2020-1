import React, { Component } from 'react'

export default class BasicFormPlainClassSet extends Component {

    constructor(props) {
        super(props)
        this.state ={firstName: '', lastName: '', email: '' }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    setFirstName(firstName){
        this.setState({firstName})
    }
    setLastName(lastName){
        this.setState({lastName})
    }
    setEmail(email){
        this.setState({email})
    }

    handleChange(event) {
        switch(event.target.name){
            case 'firstName':
                this.setFirstName(event.target.value)
                break
            case 'lastName':
                this.setLastName(event.target.value)
                break
            case 'email':
                this.setEmail(event.target.value)
                break
            default:
                console.log('erro')
        }
    }

    handleSubmit(event) {
        console.log(this.state.firstName)
        console.log(this.state.lastName)
        console.log(this.state.email)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h1>Formulário Básico 01</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="firstName">First Name: </label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.firstName}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name: </label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.lastName}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email Address: </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>

        )
    }
}
