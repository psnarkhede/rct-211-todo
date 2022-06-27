import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletetodoapi, gettodoapi, togglestatetodoapi } from "../Redux/Todo/todoaction";
import Todo from "./Todo";
import Todoinput from "./Todoinput";

const Todos = () => {

  const dispatch = useDispatch();

  const { todo, isLoading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(gettodoapi)
  }, []);

    const handledelet = (id) => {
    
    dispatch(deletetodoapi(id))

  }

  const togglestate = (id,state) => {
    dispatch(togglestatetodoapi(id,state))
  }

  return (
    <div>
        <Todoinput/>
      <h3>Todos</h3>
      {todo
        ? todo.map((el) => (
            <div
              key={el.id}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <input checked={el.isCompleted ? true : false} type="checkbox" onChange={(e) => togglestate(el.id, e.target.checked)} />
              
              {el.isCompleted ? <s>{el.todo}</s> : <p>{el.todo}</p>}
              <button onClick={() => handledelet(el.id)}>Delete</button>
            </div>
          ))
        : ""}
    </div>
  );
};

export default Todos;
