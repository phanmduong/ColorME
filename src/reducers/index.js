import getNewFeedReducer from './newFeedReducer';
import userInformationReducer from './userInformationReducer';
import loginReducer from './loginReducer';
import getFullInfoAboutOnePostReducer from './InfoAboutPostReducer';
import searchReducer from './searchReducer';
import getCourseReducer from './courseReducer';
import updateProfileReducer from './updateProfileReducer'
import registerReducer from "./registerReducers";
import getNotificationReducer from "./notificationReducer";
import changeAvatarReducer from './changeAvatarReducer'
import groupReducer from "./groupReducer";
import reportReducer from "./reportReducer";
import sideNavReducer from "./sideNavReducer";
import myAccountInformationReducer from './myAccountInformationReducer'
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
    report                      : reportReducer,
    myAccountInformation        : myAccountInformationReducer,
    sideNav                     : sideNavReducer,
});
export default rootReducer;