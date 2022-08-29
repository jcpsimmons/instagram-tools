import React, { useState } from "react";
import styles from "./FramedPreview.module.scss";

export default function FramedPreview({ image }) {
  const [dims, setDims] = useState({ height: 0, width: 0 });
  const {
    data_url,
    file: { lastModified, size, name, type },
  } = image;

  const img = new Image();

  img.src = data_url;

  img.onload = () => {
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;
  };

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
        <span>Josh C. Simmons {new Date().getFullYear()}</span>
      </div>
    </div>
  );
}
