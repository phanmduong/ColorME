import getNewFeedReducer from './getNewFeedReducer';
import userInformationReducer from './userInformationReducer';
import loginReducer from './loginReducer';
import getFullInfoAboutOnePostReducer from './getFullInfoAboutOnePostReducer';
import searchReducer from './searchReducer';
import getCourseReducer from './getCourseReducer';
import updateProfileReducer from './updateProfileReducer'
import registerReducer from "./registerReducers";
import getNotificationReducer from "./getNotificationReducer";

import changeAvatarReducer from './changeAvatarReducer'

import groupReducer from "./groupReducer";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    getNewFeed                  : getNewFeedReducer,
    userInformation             : userInformationReducer,
    getFullInfoAboutOnePost     : getFullInfoAboutOnePostReducer,
    login                       : loginReducer,
    register                    : registerReducer,
    search                      : searchReducer,
    getCourse                   : getCourseReducer,
    updateProfile               : updateProfileReducer,
    getNotification             : getNotificationReducer,

    changeAvatar                : changeAvatarReducer,
    group                       : groupReducer,

});
export default rootReducer;