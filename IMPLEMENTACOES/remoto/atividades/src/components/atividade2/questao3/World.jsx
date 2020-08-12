import React, {Component} from 'react'

export default class World extends Component {
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}