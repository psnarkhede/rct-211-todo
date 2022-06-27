import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, DELETE_TODO_ERROR, DELETE_TODO_LOADING, DELETE_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, TOGGLE_STATE_TODO_ERROR, TOGGLE_STATE_TODO_LOADING, TOGGLE_STATE_TODO_SUCCESS } from "./todoactiontypes"

let initialstate = {
    todo:[],
    isLoading:false,
    error:false,
}

export const todoreducer = (state, action) => {
    switch (action.type){

        case GET_TODO_LOADING:{
            return{
                ...state,
                isLoading:true,
                error:false,
            }
        }

        case GET_TODO_SUCCESS:{
            return{
                ...state,
                todo:action.payload,
                isLoading:false,
                error:false,
            }
        }

        case GET_TODO_ERROR:{
            return{
                ...state,
                isLoading:false,
                error:true,
            }
        }

        case ADD_TODO_LOADING:{
            return{
                ...state,
                isLoading:true,
                error:false,
            }
        }

        case ADD_TODO_SUCCESS:{
            return{
                ...state,
                todo:[...state.todo,action.payload],
                isLoading:false,
                error:false,
            }
        }

        case ADD_TODO_ERROR:{
            return{
                ...state,
                isLoading:false,
                error:true,
            }
        }

        case DELETE_TODO_LOADING:{
            return{
                ...state,
                isLoading:true,
                error:false,
            }
        }

        case DELETE_TODO_SUCCESS:{
            return{
                ...state,
                todo:action.payload,
                isLoading:false,
                error:false,
            }
        }

        case DELETE_TODO_ERROR:{
            return{
                ...state,
                isLoading:false,
                error:true,
            }
        }

        case TOGGLE_STATE_TODO_LOADING:{
            return{
                ...state,
                isLoading:true,
                error:false,
            }
        }

        case TOGGLE_STATE_TODO_SUCCESS:{
            return{
                ...state,
                todo:action.payload,
                isLoading:false,
                error:false,
            }
        }

        case TOGGLE_STATE_TODO_ERROR:{
            return{
                ...state,
                isLoading:false,
                error:true,
            }
        }

        default:{
            return {
                state
            }
        }
    }
}