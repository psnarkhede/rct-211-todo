import { GET_COUNTRY_ERROR, GET_COUNTRY_LOADING, GET_COUNTRY_SUCCEESS } from "./actiontype"


let initialstate = {
    country:[],
    isLoading:false,
    isError:false,
}

export const reducer = (state = initialstate, action) => {
    switch (action.type){

        case GET_COUNTRY_LOADING:{
            return{
                ...state,
                isLoading:true,
                isError:false,
            }
        }

        case GET_COUNTRY_SUCCEESS:{
            return{
                ...state,
                country:action.payload,
                isLoading:false,
                isError:false,
            }
        }

        case GET_COUNTRY_ERROR:{
            return{
                ...state,
                isLoading:false,
                isError:true,
            }
        }

        default:{
            return{
                ...state
            }
        }
    }
}