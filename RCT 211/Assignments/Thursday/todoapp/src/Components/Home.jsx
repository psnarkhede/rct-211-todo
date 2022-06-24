import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addtodoapi, gettodoapi, removetodoapi, toggletodoapi } from "../Store/action";
import styles from "./Home.module.css";

const Home = () => {
  const inputref = useRef();

  const dispatch = useDispatch();

  const { todo, loading, error } = useSelector((state) => state);

  const handleadd = () => {
    let value = inputref.current.value;
    addtodoapi(dispatch, value);
    inputref.current.value = "";
  };

  const togglestatus = (e,id) => {
    toggletodoapi(dispatch, id, e.target.checked)
  }

  const removetodo = (id) => {
    removetodoapi(dispatch,id)
  }

  useEffect(() => {
    gettodoapi(dispatch);
  }, []);

  if(loading) return(<p>Loading...</p>)
  if(error) return(<p>Error...</p>)
  else
  return (
    <div>
      <input ref={inputref} placeholder="Todo here" />
      <button onClick={handleadd}>Add</button>

      <div>
        {todo
          ? todo.map((el) => (
              <div className={styles.datadiv} key={el.id}>
                <input
                checked={el.isCompleted ? true : false}
                  type="checkbox"
                  onChange={(e) => togglestatus(e,el.id)}
                />
                <Link style={{textDecoration:"none"}} to={`/todo/${el.id}`} ><p className={el.isCompleted ? styles.strike : styles.nostrike} >{el.todo}</p></Link>
                <button onClick={() => removetodo(el.id)}>Remove</button>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Home;
