import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer} from "../pages/discover/child-pages/recommend/store" 
import { reducer as playerReducer } from "../pages/player/store"

// 在开发中存在着多个reducer
// 合并多个reducer
const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer
})

export default cReducer