import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, DELETE_TODO_ERROR, DELETE_TODO_LOADING, DELETE_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, TOGGLE_STATE_TODO_ERROR, TOGGLE_STATE_TODO_LOADING, TOGGLE_STATE_TODO_SUCCESS } from "./todoactiontypes";
import axios from "axios";

export const gettodoapi = (dispatch) => {
    dispatch({type:GET_TODO_LOADING})

    axios
    .get("http://localhost:8080/todo")
    .then((res) => dispatch({type:GET_TODO_SUCCESS, payload:res.data}))
    .catch(() => dispatch({type:GET_TODO_ERROR}))

}

export const addtodoapi = (dispatch,data) => {
    dispatch({type:ADD_TODO_LOADING})

    axios
    .post("http://localhost:8080/todo",{
        todo:data,
        isCompleted:false
    })
    .then((res) => dispatch({type:ADD_TODO_SUCCESS, payload:res.data}))
    .catch(() => dispatch({type:ADD_TODO_ERROR}))
}

export const deletetodoapi = (dispatch,id) => {
    dispatch({type:DELETE_TODO_LOADING})

    axios
    .delete(`http://localhost:8080/todo/${id}`)
    .then(() => 
    axios
    .get("http://localhost:8080/todo")
    .then((res) => dispatch({type:DELETE_TODO_SUCCESS, payload:res.data}))
    .catch(() => dispatch({type:DELETE_TODO_ERROR}))
    )
}

export const togglestatetodoapi = (dispatch,id,data) => {
    dispatch({type:TOGGLE_STATE_TODO_LOADING})

    axios
    .patch(`http://localhost:8080/todo/${id}`,{
        isCompleted:data
    })
    .then(() => axios
    .get("http://localhost:8080/todo")
    .then((res) => dispatch({type:TOGGLE_STATE_TODO_SUCCESS, payload:res.data}))
    .catch(() => dispatch({type:TOGGLE_STATE_TODO_ERROR})))
}