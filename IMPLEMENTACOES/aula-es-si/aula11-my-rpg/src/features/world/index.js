import React from 'react'
import { connect } from 'react-redux'

import Player from '../player'
import Map from '../map'

import { WEST, EAST, NORTH, SOUTH } from '../../config/constants'
import { moveToPosition } from './movement'
import { setTiles } from '../map/environment'
import { tiles } from '../../data/maps/1'


function World(props) {

    function handleKeyDown(e) {
        if (e.keyCode >= 37 && e.keyCode <= 40)
            switch (e.keyCode) {
                case 37:
                    return props.moveToPosition(WEST)
                case 38:
                    return props.moveToPosition(NORTH)
                case 39:
                    return props.moveToPosition(EAST)
                case 40:
                    return props.moveToPosition(SOUTH)
                default: console.log('INVALID POSITION')
            }
    }

    //previne carregar o mapa toda vez que World é renderizado
    if(props.tiles && props.tiles.length===0){
        props.setTiles(tiles)
    }
        
    //console.log('render world')
    return (
        <div
            style={{
                position: 'relative',
                width: '800px',
                height: '400px',
                margin: '20px auto',
                outline: '0px',
                borderStyle: 'solid',
                borderColor: 'white'
            }}
            tabIndex='-1'
            onKeyDown={
                (e) => {
                    e.preventDefault()
                    handleKeyDown(e)
                }
            }
        >
            <Map />
            <Player />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        position: state.player.position,
        tiles: state.map.tiles
    }
}

function mapDispatchToProps(dispatch) {
    return {
        moveToPosition(direction) {
            const action = moveToPosition(direction)
            dispatch(action)
        },
        setTiles(tiles) {
           const action = setTiles(tiles)
           dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(World)