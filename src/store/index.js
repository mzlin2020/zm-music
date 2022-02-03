import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

// 使安装的reactdevtool生效
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// 创建store(第二个参数是应用一些中间件)
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store