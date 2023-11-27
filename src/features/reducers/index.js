import { combineReducers } from 'redux'
import authReducer from './auth-reducer'
import printingReducer from './printing-reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  printing: printingReducer
})

export default rootReducer
