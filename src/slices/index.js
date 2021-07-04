import { combineReducers } from "redux"
import counterReducer from './counter'
import catReducer from './cat'

const rootReducer = combineReducers({
    counter: counterReducer,
    cat: catReducer
})

export default rootReducer