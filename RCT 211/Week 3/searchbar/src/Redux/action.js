import axios from "axios"
import { GET_COUNTRY_ERROR, GET_COUNTRY_LOADING, GET_COUNTRY_SUCCEESS } from "./actiontype"

export const getcountryapi = (dispatch,data) => {
    dispatch({type:GET_COUNTRY_LOADING})

    axios
    .get(`http://localhost:8080/countries`)
    .then((res) => dispatch({type:GET_COUNTRY_SUCCEESS, payload:res.data}))
    .then(() => dispatch({type:GET_COUNTRY_ERROR}))
}