import getNewFeedReducer from './getNewFeedReducer';
import getUserProfileReducer from './getUserProfileReducer';
import loginReducer from './loginReducer';
import getFullInfoAboutOnePostReducer from './getFullInfoAboutOnePostReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    getNewFeed : getNewFeedReducer,
    getUserProfile : getUserProfileReducer,
    getFullInfoAboutOnePost : getFullInfoAboutOnePostReducer,
    login : loginReducer,
});

export default rootReducer;