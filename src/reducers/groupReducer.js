import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';

export default function groupReducer(state = initialState.group, action) {
    switch (action.type){
        case types.BEGIN_GET_GROUP_TOPICS:
            return{
                ...state,
                ...{
                    isLoadingGroupTopics: action.isLoadingGroupTopics,
                    errorGroupTopics: action.errorUserProfile,
                }
            }
        case types.BEGIN_GET_GROUP_PRODUCTS:
            return{
                ...state,
                ...{
                    isLoadingGroupProducts: action.isLoadingUserProgress,
                    errorGroupProducts: action.errorUserProgress,
                }
            }
        case types.BEGIN_GET_GROUP_MEMBER:
            return {
                ...state,
                ...{
                    isLoadingGroupMembers: action.isLoadingUserProducts,
                    errorGroupMembers: action.errorUserProducts,
                }
            }

        case types.GET_GROUP_TOPICS_SUCCESS:
            return{
                ...state,
                ...{
                    topics: action.topics,
                    isLoadingGroupTopics: action.isLoadingUserProfile,
                    errorGroupTopics: action.errorUserProfile,
                }
            }
        case types.GET_GROUP_PRODUCTS_SUCCESS:
            return{
                ...state,
                ...{
                    products: action.products,
                    groupName: action.groupName,
                    isLoadingGroupProducts: action.isLoadingUserProgress,
                    errorGroupProducts: action.errorUserProgress,
                }
            }
        case types.GET_GROUP_MEMBER_SUCCESS:
            return{
                ...state,
                ...{
                    members: action.members,
                    isLoadingGroupMembers: action.isLoadingUserProducts,
                    errorGroupMembers: action.errorUserProducts,
                }
            }
        case types.GET_GROUP_TOPICS_ERROR:
            return{
                ...state,
                ...{
                    isLoadingGroupTopics: action.isLoading,
                    errorGroupTopics: action.errorUserProfile,
                }
            }
        case types.GET_GROUP_PRODUCTS_ERROR:
            return{
                ...state,
                ...{
                    isLoadingGroupProducts: action.isLoadingUserProgress,
                    errorGroupProducts: action.errorUserProgress,
                }
            }
        case types.GET_GROUP_MEMBER_ERROR:
            return{
                ...state,
                ...{
                    isLoadingGroupMembers: action.isLoadingUserProducts,
                    errorGroupMembers: action.errorUserProducts,
                }
            }
        default:
            return state
    }
}