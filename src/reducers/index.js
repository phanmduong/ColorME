import getNewFeedReducer from './newFeedReducer';
import userInformationReducer from './userInformationReducer';
import loginReducer from './loginReducer';
import infoAboutPostReducer from './InfoAboutPostReducer';
import searchReducer from './searchReducer';
import getCourseReducer from './courseReducer';
import updateProfileReducer from './updateProfileReducer'
import registerReducer from "./registerReducers";
import getNotificationReducer from "./notificationReducer";
import changeAvatarReducer from './changeAvatarReducer'
import groupReducer from "./groupReducer";
import reportReducer from "./reportReducer";
import sideNavReducer from "./sideNavReducer";
import myAccountInformationReducer from './myAccountInformationReducer';
import feedbackAppReducer from './feedbackAppReducer';
import topicReducer from './topicReducer';
import curriculumReducer from './curriculumReducer';
import navigationReducer from './navigationReducer';
import baseReducer from './baseReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    getNewFeed                  : getNewFeedReducer,
    userInformation             : userInformationReducer,
    infoAboutPost               : infoAboutPostReducer,
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
    feedback                    : feedbackAppReducer,
    topic                       : topicReducer,
    curriculum                  : curriculumReducer,
    nav                         : navigationReducer,
    base                        : baseReducer,
});
export default rootReducer;