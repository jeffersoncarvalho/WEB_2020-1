import React from 'react'

export default (props) => {
    return (
        <div className='card' style={{ width: '400px' }}>
            <div className='card-header'>
                Inimigo: {props.name}, na arena {props.arena}
            </div>
            <div className='card-body'>
                <img src={props.url} alt={props.name} />
            </div>
        </div>
    )
}