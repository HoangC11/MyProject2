import { combineReducers } from 'redux';
import loginReducers from './loginReducers';
import appReducers from './appReducers'
const allReducers = combineReducers({

    loginReducers,
    appReducers,

});

export default allReducers;