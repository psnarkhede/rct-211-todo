import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, REMOVE_TODO, TOGGLE_TODO, UPDATE_TODO } from "./actiontypes";
import axios from "axios";


export const addtodoapi = (dispatch, input) => {
    dispatch({type:ADD_TODO_LOADING})

    axios
    .post("http://localhost:8080/todoapp",{
        "todo":input,
        isCompleted:false,
    })
    .then((res) => dispatch({type:ADD_TODO_SUCCESS, payload:res.data}))
    .catch(() => dispatch({type:ADD_TODO_ERROR}))
}

export const gettodoapi = (dispatch) => {
    dispatch({type:GET_TODO_LOADING})

    axios
    .get("http://localhost:8080/todoapp")
    .then((res) => dispatch({type:GET_TODO_SUCCESS, payload:res.data}))
    .catch(() => dispatch({type:GET_TODO_ERROR}))
}

export const toggletodoapi = (dispatch, id, change) => {
    axios
    .patch(`http://localhost:8080/todoapp/${id}`,{
        "isCompleted":change
    })
    .then(() => 
    axios
    .get("http://localhost:8080/todoapp")
    .then((res) => dispatch({type:TOGGLE_TODO, payload:res.data}))
    )
}

export const removetodoapi = (dispatch,id) => {
    axios
    .delete(`http://localhost:8080/todoapp/${id}`)
    .then(() => 
    axios
    .get("http://localhost:8080/todoapp")
    .then((res) => dispatch({type:REMOVE_TODO, payload:res.data}))
    )
}
