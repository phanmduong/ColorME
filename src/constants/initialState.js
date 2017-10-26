export default {
    login:{
        login: {},
        token: undefined,
        isLoading: false,
        error: false,
        result: false,
        isGetLocalData: false,
        status: 0,
        user : {},
        isAuthentication : false,
        isAutoLogin : true,
        save : false,
    },


    register: {
        register: {},
        isLoading: false,
        error: false,
        status : 0,
    },
    getNewFeed : {
        products : [],
        isLoading: false,
        error : false,
        result : false,
        isRefreshing : false,
    },

    getFullInfoAboutOnePost: {
        likers:[],
        post:{},
        comments:[],
        isLoading: false,
        error: false,
        result: false,
        statusPostComment: '',
    },
    userInformation : {
        isLoading: false,
        isLoadingUserProfile: false,
        isLoadingUserProducts: false,
        isLoadingUserProgress: false,
        errorUserProfile: false,
        errorUserProducts: false,
        errorUserProgress: false,
        user:{},
        products: [],
        progress: [],
    },
    myAccountInformation : {
        isLoading: false,
        isLoadingUserProfile: false,
        isLoadingUserProducts: false,
        isLoadingUserProgress: false,
        errorUserProfile: false,
        errorUserProducts: false,
        errorUserProgress: false,
        user:{},
        products: [],
        progress: [],
    },

    search:{
        users:[],
        products:[],
        isLoading: false,
        error: false,
        result: false,
    },
    updateProfile : {
        isLoading : false,
        error : false,
        status : 0,
    },
    getCourse:{
        courses: [],
        isLoading : false,
    },
    getNotification:{
        notification:[],
        isLoading : false,
        error : false,
    },
    getComment:{
        isLoading : false,
        error : false,
        comments : []
    },

    changeAvatar : {
        isLoading: false,
    },
    group:{
        isLoadingGroupTopics: false,
        isLoadingGroupProducts: false,
        isLoadingGroupMembers: false,
        errorGroupTopics: false,
        errorGroupProducts: false,
        errorGroupMembers: false,
        groupName: '',
        groupAvatar: '',
        topics:[],
        products:[],
        members:[],
    },

    report:{
        isLoading: false,
        reportPostResult: {},
    },
}