import * as types from '../constants/actionTypes';
import * as groupApi from '../apis/groupApi';

export function beginGetGroupTopics() {
    return{
        type: types.BEGIN_GET_GROUP_TOPICS,
        isLoadingGroupTopics: true,
        errorGroupTopics: false,
    }
}
export function beginGetGroupProducts() {
    return{
        type: types.BEGIN_GET_GROUP_PRODUCTS,
        isLoadingGroupProducts: true,
        errorGroupProducts: false,
    }
}
export function beginGetGroupMember() {
    return{
        type: types.BEGIN_GET_GROUP_MEMBER,
        isLoadingGroupMembers: true,
        errorGroupMembers: false,
    }
}

export function getGroupTopicsSuccess(response) {
    return{
        type: types.GET_GROUP_TOPICS_SUCCESS,
        topics: response.data.group.topics,
        isLoadingGroupTopics: false,
        errorGroupTopics: false,

    }
}
export function getGroupProductsSuccess(response) {
    return{
        type: types.GET_GROUP_PRODUCTS_SUCCESS,
        products: response.data.group.products,
        groupName: response.data.group.name,
        groupAvatar: response.data.group.avatar_url,
        isLoadingGroupProducts: false,
        errorGroupProducts: false,

    }
}
export function getGroupMemberSuccess(response) {
    return{
        type: types.GET_GROUP_MEMBER_SUCCESS,
        members: response.data.group.members,
        isLoadingGroupMembers: false,
        errorGroupMembers: false,

    }
}

export function getGroupTopicsError() {
    return{
        type: types.GET_GROUP_TOPICS_ERROR,
        isLoadingGroupTopics: false,
        errorGroupTopics: true,
    }
}

export function getGroupProductsError() {
    return{
        type: types.GET_GROUP_PRODUCTS_ERROR,
        isLoadingGroupProducts: false,
        errorGroupProducts: true,
    }
}

export function getGroupMemberError() {
    return{
        type: types.GET_GROUP_MEMBER_ERROR,
        isLoadingGroupMembers: false,
        errorGroupMembers: true,
    }
}

export function getGroupTopics(group_link, token) {
    return(dispatch) => {
        dispatch(beginGetGroupTopics());
        groupApi.groupApi(group_link, token)
            .then(function (response) {
                dispatch(getGroupTopicsSuccess(response));
                console.log(response.data.group.topics);
            })
            .catch(function () {
                dispatch(getGroupTopicsError());
            })
    }
}

export function getGroupProducts(group_link, token) {
    return(dispatch) => {
        dispatch(beginGetGroupProducts());
        groupApi.groupApi(group_link, token)
            .then(function (response) {
                dispatch(getGroupProductsSuccess(response));
            })
            .catch(function () {
                dispatch(getGroupProductsError());
            })
    }
}

export function getGroupMember(group_link, token) {
    return(dispatch) => {
        dispatch(beginGetGroupMember());
        groupApi.groupApi(group_link, token)
            .then(function (response) {
                dispatch(getGroupMemberSuccess(response));
            })
            .catch(function () {
                dispatch(getGroupMemberError());
            })
    }
}