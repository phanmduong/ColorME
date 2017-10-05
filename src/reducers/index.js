import getNewFeedReducer from './getNewFeedReducer';
import getUserProfileReducer from './getUserProfileReducer';
import loginReducer from './loginReducer';
import getFullInfoAboutOnePostReducer from './getFullInfoAboutOnePostReducer';
import searchReducer from './searchReducer';
import getCourseReducer from './getCourseReducer';
import {combineReducers} from 'redux';
import registerReducer from "./registerReducers";

const rootReducer = combineReducers({
    getNewFeed : getNewFeedReducer,
    getUserProfile : getUserProfileReducer,
    getFullInfoAboutOnePost : getFullInfoAboutOnePostReducer,
    login : loginReducer,
    register : registerReducer,
    search: searchReducer,
    getCourse: getCourseReducer,
});

export default rootReducer;