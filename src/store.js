import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { userListReducer, userInfoReducer, userRepoReducer } from './reducers/userReducers'

const reducer = combineReducers({
    userList: userListReducer,
    userInfo: userInfoReducer,
    userRepo: userRepoReducer
})


const middleware = [thunk]


const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))


export default store