import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';

export default function myAccountInformationReducer(state = initialState.myAccountInformation, action) {
    switch (action.type) {
        case types.BEGIN_GET_MYACCOUNT_PROFILE:
            return {
                ...state,
                ...{
                    isLoadingUserProfile: action.isLoadingUserProfile,
                    errorUserProfile: action.errorUserProfile,
                }
            };
        case types.BEGIN_GET_MYACCOUNT_PROGRESS:
            return {
                ...state,
                ...{
                    isLoadingUserProgress: action.isLoadingUserProgress,
                    errorUserProgress: action.errorUserProgress,
                }
            };
        case types.BEGIN_GET_MYACCOUNT_PRODUCTS:
            return {
                ...state,
                ...{
                    isLoadingUserProducts: action.isLoadingUserProducts,
                    errorUserProducts: action.errorUserProducts,
                }
            };

        case types.GET_MYACCOUNT_PROFILE_SUCCESS:
            return {
                ...state,
                ...{
                    user: action.user,
                    isLoadingUserProfile: action.isLoadingUserProfile,
                    errorUserProfile: action.errorUserProfile,
                }
            };
        case types.GET_MYACCOUNT_PROGRESS_SUCCESS:
            return {
                ...state,
                ...{
                    progress: action.progress,
                    isLoadingUserProgress: action.isLoadingUserProgress,
                    errorUserProgress: action.errorUserProgress,
                }
            };
        case types.GET_MYACCOUNT_PRODUCTS_SUCCESS:
            return {
                ...state,
                ...{
                    products: action.products,
                    isLoadingUserProducts: action.isLoadingUserProducts,
                    errorUserProducts: action.errorUserProducts,
                }
            };
        case types.GET_MYACCOUNT_PROFILE_ERROR:
            return {
                ...state,
                ...{
                    isLoadingUserProfile: action.isLoading,
                    errorUserProfile: action.errorUserProfile,
                }
            };
        case types.GET_MYACCOUNT_PROGRESS_ERROR:
            return {
                ...state,
                ...{
                    isLoadingUserProgress: action.isLoadingUserProgress,
                    errorUserProgress: action.errorUserProgress,
                }
            };
        case types.GET_MYACCOUNT_PRODUCTS_ERROR:
            return {
                ...state,
                ...{
                    isLoadingUserProducts: action.isLoadingUserProducts,
                    errorUserProducts: action.errorUserProducts,
                }
            };
        default:
            return state;
    }
}