export default {
    login:{
        login: {},
        user:{},
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
        productsUser: [],
        progress: [],
    },

    search:{
        users:[],
        products:[],
        isLoading: false,
        error: false,
        result: false,
    }
}