import registerReducers from '../reducers/registerReducers';
import loginReducers from '../reducers/loginReducer';
import {combineReducers} from 'redux';
const rootReducer = combineReducers({
    register : registerReducers,
    login : loginReducers,

})
export default rootReducer