import { combineReducers } from 'redux'
import allList  from '../reducers/rootReducers'

export default combineReducers({
  root: allList
})