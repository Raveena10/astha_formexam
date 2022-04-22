import {combineReducers} from 'redux'
import { ContactReducer } from './ContactReduce'

export default combineReducers({
    contacts: ContactReducer,
})
