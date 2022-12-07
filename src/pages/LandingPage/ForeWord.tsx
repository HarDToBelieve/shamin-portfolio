import clsx from "clsx";
import React from "react";
import styles from "./landing.module.scss";

const ForeWord = () => {
  return (
    <div
      className={clsx("flex w-full h-full min-h-screen", styles.bgMain)}
    ></div>
  );
};

export default ForeWord;
