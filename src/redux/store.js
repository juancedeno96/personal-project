import {createStore, combineReducers, applyMiddleware} from 'redux'
import userReducer from './userReducer'
import orderReducer from './orderReducer'
import productReducer from './productReducer'
import promiseMiddleware from 'redux-promise-middleware'


const rootReducer = combineReducers({
    userReducer,
    orderReducer,
    productReducer
})


export default createStore(rootReducer, applyMiddleware(promiseMiddleware))
