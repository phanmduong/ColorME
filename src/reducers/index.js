import getNewFeedReducer from './getNewFeedReducer';
import getUserProfileReducer from './getUserProfileReducer';
import loginReducer from './loginReducer';
import getFullInfoAboutOnePostReducer from './getFullInfoAboutOnePostReducer';
import searchReducer from './searchReducer';
import getCourseReducer from './getCourseReducer';
import updateProfileReducer from'./updateProfileReducer'
import {combineReducers} from 'redux';
import registerReducer from "./registerReducers";
import getCommentReducer from '../reducers/Comment/getCommentReducer'
const rootReducer = combineReducers({
    getNewFeed : getNewFeedReducer,
    getUserProfile : getUserProfileReducer,
    getFullInfoAboutOnePost : getFullInfoAboutOnePostReducer,
    login : loginReducer,
    register : registerReducer,
    search: searchReducer,
    getCourse : getCourseReducer,
    updateProfile : updateProfileReducer,
    getComment : getCommentReducer
});

export default rootReducer;