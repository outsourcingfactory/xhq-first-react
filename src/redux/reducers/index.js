import { combineReducers } from 'redux'
import todos from './todos'
import Auth from './Auth'
import User from './user'
// import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
    todos,
    Auth,
    User
})

export default rootReducer
