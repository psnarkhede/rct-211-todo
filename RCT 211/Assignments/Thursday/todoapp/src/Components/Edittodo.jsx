import axios from 'axios';
import React, { useState } from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { updatetodoapi } from '../Store/action';

const Edittodo = () => {
    const {id} = useParams();

    const newtodo = useRef();

    const [data, setData] = useState([])

    const [edit, setEdit] = useState(false)

    const {todo} = useSelector((state) => state);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        axios
       .get(`http://localhost:8080/todoapp/${id}`)
       .then((res) => setData(res.data))
    },[])

    const handleupdate = (newid) => {
        let value = newtodo.current.value;
        setData(value);
        setEdit(!edit);

       axios
       .patch(`http://localhost:8080/todoapp/${newid}`,{
           "todo":value
       })
       .then((res) => setData(res.data))
        
        
    }



  return (
    <div>
        Edit your todo here
        <div>
        <p hidden={edit === false ? false : true}>{data.todo}</p>
        <input ref={newtodo} hidden={edit === false ? true : false} defaultValue={data.todo} />
        <button onClick={() => {!edit ? setEdit(!edit) : handleupdate(data.id)}} >{edit === false ? "edit" : "Update"}</button>
        </div>
    </div>
  )
}

export default Edittodo