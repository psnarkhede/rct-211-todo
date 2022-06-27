import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { addtodoapi } from '../Redux/Todo/todoaction';

const Todoinput = () => {
    const todoref = useRef();

    const dispatch = useDispatch();

    const handletodo = () => {
        if(todoref.current.value !== ""){
            dispatch(addtodoapi(todoref.current.value))
        todoref.current.value = "";
        }
    }
  return (
    <div>
        <h2>Todoinput</h2>
        <input placeholder="todo" ref={todoref}  />
        <button onClick={() => handletodo()}>Add</button>
    </div>
  )
}

export default Todoinput