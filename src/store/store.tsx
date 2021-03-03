import {createStore, combineReducers} from 'redux'
import userReducer from './User/User.reducer'
import deviceReducer from './Device/Device.reducer'


const rootReducer = combineReducers({
    user: userReducer,
    device: deviceReducer
})

const store = createStore(rootReducer);

export default store;