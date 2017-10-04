export default {
    login:{
        login: {},
        token:"",
        isLoading: false,
        error: false,
        result: false,
        isGetLocalData: false,
        status: 0,
        userID:'',
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
    },

    search:{
        users:[],
        products:[],
        isLoading: false,
        error: false,
        result: false,
    }
}