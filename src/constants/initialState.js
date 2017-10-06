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
        isLoading: false,
        error: false,
        result: false,
    },
    getUserProfile : {
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
        course:[],
    },
    getComment : {
        isLoading : false,
        comments : []
    }
}