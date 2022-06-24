import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { gettodoapi } from '../Store/action';
import styles from "./Home.module.css"

const Totaltodo = () => {

    const [data, setData] = useState([])

  const dispatch = useDispatch();

  const { todo, loading, error } = useSelector((state) => state);
  useEffect(() => {
    gettodoapi(dispatch);
  }, []);

  useEffect(() => {
  if(todo){
  todo.map((el) => {
    if(el.isCompleted === false){
       data.push(el)
    }
  })
}
},[])


  return (
    <div>
        Incompleted todos...
        <div>
        {data.length > 0 ? data.map((el) => (
            <div  className={el.isCompleted ? "" : styles.datadiv} key={el.id}>
            <p>{!el.isCompleted ? el.todo : null}</p>
            </div>
        )) : <p>No incomplete Todo</p>}
      </div>
    </div>
  )
}

export default Totaltodo