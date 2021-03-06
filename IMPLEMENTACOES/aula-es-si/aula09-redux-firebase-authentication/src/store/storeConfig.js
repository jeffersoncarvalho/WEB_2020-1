import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import reducer from '../store/reducers'
import firebase from '../utils/firebase'

function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch (error) {
        console.log(error)
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state')
        if (serializedState === null) return undefined
        return JSON.parse(serializedState)
    } catch (error) {
        console.log(error)
        return undefined
    }
}

const persistedState = loadFromLocalStorage()

const store = createStore(
    reducer,
    persistedState,
    applyMiddleware(reduxThunk)
)

store.subscribe(
    () => {
        saveToLocalStorage(store.getState())
    }
)

const rrfProps = {
    firebase,
    config: {},
    dispatch: store.dispatch
}

export { store, rrfProps }
