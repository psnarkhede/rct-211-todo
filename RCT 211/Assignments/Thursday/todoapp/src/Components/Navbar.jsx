import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./Home.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <Link  style={{textDecoration:"none"}} to="/">Home</Link>
        <Link  style={{textDecoration:"none"}} to="/total">Total todo</Link>
    </div>
  )
}

export default Navbar