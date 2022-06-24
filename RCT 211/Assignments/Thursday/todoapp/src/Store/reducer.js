import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, REMOVE_TODO, TOGGLE_TODO, UPDATE_TODO } from "./actiontypes"

const initialstate = {
    todo:[],
    loading:false,
    error:false,
}

export const todoreducer = (state = initialstate, action) => {
    switch(action.type){
        case ADD_TODO_LOADING : {
            return{
                ...state,
                loading:true,
                error:false,
            }
        }

        case ADD_TODO_SUCCESS : {
            return{
                ...state,
                todo:[...state.todo, action.payload],
                loading:false,
                error:false,
            }
        }

        case ADD_TODO_ERROR:{
            return{
                ...state,
                loading:false,
                error:true,
            }
        }

        case GET_TODO_LOADING : {
            return {
                ...state,
                loading:true,
                error:false,
            }
        }

        case GET_TODO_SUCCESS : {
            return{
                ...state,
                todo:action.payload,
                loading:false,
                error:false
            }
        }

        case GET_TODO_ERROR : {
            return{
                ...state,
                loading:false,
                error:true
            }
        }

        case TOGGLE_TODO : {
            return{
                ...state,
                todo:action.payload,
                loading:false,
                error:false
            }
        }

        case REMOVE_TODO : {
            return{
                ...state,
                todo:action.payload,
                loading:false,
                error:false
            }
        }

        default : {
            return{
                state
            }
        }
    }
}