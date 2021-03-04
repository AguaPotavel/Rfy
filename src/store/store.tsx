import {createStore, combineReducers} from 'redux'
import userReducer from './User/User.reducer'
import deviceReducer from './Device/Device.reducer'
import musicReducer from './Playing/Playing.reducer'

const rootReducer = combineReducers({
    user: userReducer,
    device: deviceReducer,
    music: musicReducer
})

const store = createStore(rootReducer);

export default store;