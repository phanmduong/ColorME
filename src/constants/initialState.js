export default {
    login:{
        login: {},
        token: undefined,
        isLoading: false,
        error: false,
        result: false,
        isGetLocalData: false,
        status: 0,
        userID:'',
    },
    register: {
        register: {},
        isLoading: false,
        error: false,
        status : 0,
    },
    getNewFeed : {
        products: [],
        isLoading: false,
        error : false,
        result : false,
    },

    getFullInfoAboutOnePost: {
        post:{},
        comments:[],
        isLoading: false,
        error: false,
        result: false,
    },
    userInformation : {
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
        courses:[],
    },
    getNotification:{
        notification:[],
    },
    getComment:{
        isLoading : false,
        comments : []
    }
}