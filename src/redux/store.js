import { legacy_createStore } from "redux";
import { applyMiddleware, compose} from 'redux'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import reducer from './counter/counterReducer'
const store=legacy_createStore(reducer,composeEnhancers(applyMiddleware()))
export default store

