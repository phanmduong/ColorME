import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';

export default function groupReducer(state = initialState.group, action) {
    switch (action.type){
        case types.BEGIN_GET_GROUP_TOPICS:
            return{
                ...state,
                ...{
                    isLoadingGroupTopics: action.isLoadingGroupTopics,
                    errorGroupTopics: action.errorGroupTopics,
                }
            };
        case types.BEGIN_GET_GROUP_PRODUCTS:
            return{
                ...state,
                ...{
                    isLoadingGroupProducts: action.isLoadingGroupProducts,
                    errorGroupProducts: action.errorGroupProducts,
                }
            };
        case types.BEGIN_GET_GROUP_MEMBER:
            return {
                ...state,
                ...{
                    isLoadingGroupMembers: action.isLoadingGroupMembers,
                    errorGroupMembers: action.errorGroupMembers,
                }
            };

        case types.GET_GROUP_TOPICS_SUCCESS:
            return{
                ...state,
                ...{
                    topics: action.topics,
                    isLoadingGroupTopics: action.isLoadingGroupTopics,
                    errorGroupTopics: action.errorGroupTopics,
                }
            };
        case types.GET_GROUP_PRODUCTS_SUCCESS:
            return{
                ...state,
                ...{
                    products: action.products,
                    groupName: action.groupName,
                    groupAvatar: action.groupAvatar,
                    isLoadingGroupProducts: action.isLoadingGroupProducts,
                    errorGroupProducts: action.errorGroupProducts,
                }
            };
        case types.GET_GROUP_MEMBER_SUCCESS:
            return{
                ...state,
                ...{
                    members: action.members,
                    isLoadingGroupMembers: action.isLoadingGroupMembers,
                    errorGroupMembers: action.errorGroupMembers,
                }
            };
        case types.GET_GROUP_TOPICS_ERROR:
            return{
                ...state,
                ...{
                    isLoadingGroupTopics: action.isLoadingGroupTopics,
                    errorGroupTopics: action.errorGroupTopics,
                }
            };
        case types.GET_GROUP_PRODUCTS_ERROR:
            return{
                ...state,
                ...{
                    isLoadingGroupProducts: action.isLoadingGroupProducts,
                    errorGroupProducts: action.errorGroupProducts,
                }
            };
        case types.GET_GROUP_MEMBER_ERROR:
            return{
                ...state,
                ...{
                    isLoadingGroupMembers: action.isLoadingGroupMembers,
                    errorGroupMembers: action.errorGroupMembers,
                }
            };
        default:
            return state
    }
}