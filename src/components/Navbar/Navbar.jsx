import React, { useState } from "react";
import styles from "./Navbar.module.css";
import imgLogo from "../../assets/logo.svg";

//icons
import { VscChromeClose, VscMenu } from "react-icons/vsc";
//hooks
import useWidth from "../../hooks/useWidth";

const Navbar = () => {
  const { width } = useWidth();

  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className={styles.container}>
      <div className="logo">
        <img src={imgLogo} alt="logo" />
      </div>
      {width < 640 ? (
        <div className={styles.mobileIcon}>
          {isMobile ? (
            <button onClick={handleClick}>
              <VscChromeClose />
            </button>
          ) : (
            <button onClick={handleClick}>
              <VscMenu />
            </button>
          )}
          {isMobile ? (
            <div className={styles.navbar}>
              <a href="#home">Home</a>
              <a href="#New">New</a>
              <a href="#Popular">Popular</a>
              <a href="#Trending">Trending</a>
              <a href="#Categories">Categories</a>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className={styles.navbarDesktop}>
          <a href="#home">Home</a>
          <a href="#New">New</a>
          <a href="#Popular">Popular</a>
          <a href="#Trending">Trending</a>
          <a href="#Categories">Categories</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
