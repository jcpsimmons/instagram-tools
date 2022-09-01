import React, { useState } from "react";
import styles from "./FramedPreview.module.scss";

export default function FramedPreview({ image }) {
  const {
    data_url,
    file: { lastModified, size, name, type },
  } = image;

  const unixArr = (Math.floor(Date.now() / 1000) + "").split("");

  return (
    <div className={styles.framedpreview}>
      <div>
        <img src={data_url} alt="" />
        <div className={styles.datastamp}>
          <div>{lastModified}</div>
          <div>{size}</div>
          <div>{name.substring(0, 40)}</div>
          <div>{type}</div>
        </div>
        <div className={styles.unix}>
          {unixArr.map((number) => (
            <div className={Math.random() > 0.7 ? styles.spacer : ""}>
              {number}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.watermark}>
        <div className={styles.line}></div>
        <div>Josh C. Simmons {new Date().getFullYear()}</div>
      </div>
    </div>
  );
}
