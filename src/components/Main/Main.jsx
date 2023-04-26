import React from "react";
import styles from "./Main.module.css";
//images
import imgMain from "../../assets/image-web-3-desktop.jpg";
//data
import { news, oldNews } from "../../data";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <img src={imgMain} alt="imagem da main" />
        <div className={styles.content}>
          <h1>The Bright Future of Web 3.0? </h1>
          <div className={styles.paragraphAndBtn}>
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button>read more</button>
          </div>
        </div>
      </div>
      <div className={styles.news}>
        <h1>New</h1>
        {news.map((news) => (
          <div key={news.id} className={styles.listNews}>
            <h3>{news.h3}</h3>
            <p>{news.p}</p>
          </div>
        ))}
      </div>
      <div className={styles.oldNews}>
        {oldNews.map((oldNews) => (
          <div key={oldNews.id} className={styles.listOld}>
            <div className={styles.listImg}>
              <img src={oldNews.image} alt="list" />
            </div>
            <div className={styles.oldContent}>
              <span>{oldNews.number}</span>
              <h4>{oldNews.h4}</h4>
              <p>{oldNews.p}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
