import { MOVE_PLAYER } from '../../config/constants'

const initialState = {
    position: [40,40]
}

const playerReducer = (state=initialState, action) => {
    switch(action.type){
        case MOVE_PLAYER:
            return {
                ...state,
                position: action.payload
            }
        default:
            return state
    }
}

export default playerReducer