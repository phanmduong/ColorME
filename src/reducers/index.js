import getNewFeedReducer from './getNewFeedReducer';
import getUserProfileReducer from './getUserProfileReducer';
import loginReducer from './loginReducer';
import getFullInfoAboutOnePostReducer from './getFullInfoAboutOnePostReducer';
import searchReducer from './searchReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    getNewFeed : getNewFeedReducer,
    getUserProfile : getUserProfileReducer,
    getFullInfoAboutOnePost : getFullInfoAboutOnePostReducer,
    login : loginReducer,
    search: searchReducer,
});

export default rootReducer;