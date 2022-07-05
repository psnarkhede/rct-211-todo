import React, { useEffect, useRef, useState } from "react";
import styles from "./searchbox.module.css"
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getcountryapi } from "../Redux/action";

const Searchbar = () => {
  const [input, setInput] = useState("");
  const [newinput, setnewInput] = useState([]);

  const dispatch = useDispatch();

  let {country, isLoading, isError} = useSelector((state) => state)

    const handlechange = (e) => {
        setInput(e.target.value);
    }

    useEffect(() => {
        getcountryapi(dispatch);
    },[])

    useEffect(() => { // this is to get the country that matches the changing input
        //it is very important understand it
        if(input === ""){
        setnewInput([])
        }else{
            let newcountry = country.filter((item) =>
            item.country.toLowerCase().indexOf(input) !== -1 ? true : false
            ).map(item => item);
            setnewInput(newcountry);
        }
    },[input])

    const handlesuggestation = (e) => {
        
    }

  return (
    <div>
      <h1>Searchbar</h1>

      <div style={{ width: "60%", height: "50px", margin: "auto" }}>
        <input
          onChange={handlechange}
          type="text"
          placeholder="input"
        />
        <button hidden={input ? true : false}>X</button>
      </div>

<div hidden={newinput.length === 0 ? true : false} className={styles.box} onKeyUp={handlesuggestation}>
      {newinput ? newinput.map((el) => (
        <div key={el.country} className={styles.innerbox} >
        <p>{el.country}</p>
        </div>
      )):''}
      </div>
    </div>
  );
};

export default Searchbar;
