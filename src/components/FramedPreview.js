import React from "react";
import { INSTAGRAM_DIMS } from "../constants";
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
          <div>{name}</div>
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
        <span>Josh C. Simmons 2022</span>
      </div>
    </div>
  );
}
