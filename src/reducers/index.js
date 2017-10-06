import getNewFeedReducer from './getNewFeedReducer';
import getUserProfileReducer from './getUserProfileReducer';
import loginReducer from './loginReducer';
import getFullInfoAboutOnePostReducer from './getFullInfoAboutOnePostReducer';
import searchReducer from './searchReducer';
import getCourseReducer from './getCourseReducer';
import updateProfileReducer from './updateProfileReducer'
import registerReducer from "./registerReducers";
import getNotificationReducer from "./getNotificationReducer";

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    getNewFeed                  : getNewFeedReducer,
    getUserProfile              : getUserProfileReducer,
    getFullInfoAboutOnePost     : getFullInfoAboutOnePostReducer,
    login                       : loginReducer,
    register                    : registerReducer,
    search                      : searchReducer,
    getCourse                   : getCourseReducer,
    updateProfile               : updateProfileReducer,
    getNotification             : getNotificationReducer
});

export default rootReducer;