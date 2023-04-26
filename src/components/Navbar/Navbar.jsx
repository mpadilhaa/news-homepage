import React from "react";
import styles from "./Navbar.module.css"
import imgLogo from "../../assets/logo.svg"

const Navbar = () => {
  return <div className={styles.container}>
    <div className="logo">
     <img src={imgLogo} alt="logo" />
    </div>
    <div className={styles.navbar}>
      <a href="#home">Home</a>
      <a href="#New">New</a>
      <a href="Popular">Popular</a>
      <a href="#Trending">Trending</a>
      <a href="#Categories">Categories</a>
    </div>
  </div>;
};

export default Navbar;
