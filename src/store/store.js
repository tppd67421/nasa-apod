import { createStore } from 'redux'
import reducer from './reducers/index'
import initialState from './initialState.json'

const store = createStore(reducer, initialState)

export default store
