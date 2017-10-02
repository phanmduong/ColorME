import getNewFeedReducer from './getNewFeedReducer';
import getUserProfileReducer from './getUserProfileReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    getNewFeed : getNewFeedReducer,
    getUserProfile : getUserProfileReducer,
});

export default rootReducer;