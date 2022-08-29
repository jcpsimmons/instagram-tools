import React from "react";
import { INSTAGRAM_DIMS } from "../constants";
import styles from "./FramedPreview.module.scss";

export default function FramedPreview({ image }) {
  const {
    data_url,
    file: { lastModified, size, name, type },
  } = image;

  return (
    <div className={styles.framedpreview}>
      <img src={data_url} style={{ width: "90%" }} alt="" />
      <div className={styles.name}>Josh C. Simmons 2022</div>
      <div className={styles.datastamp}>
        <span>{lastModified}</span>
        <span>{size}</span>
        <span>{name}</span>
        <span>{type}</span>
      </div>
    </div>
  );
}
