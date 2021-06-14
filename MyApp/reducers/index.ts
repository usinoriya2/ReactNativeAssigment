import { combineReducers } from "redux"
import historyReducers from "./historyReducers"

const allReducers = combineReducers({
  characterHistory: historyReducers,
})

export default allReducers