import React from "react";
import classNames from "classnames";

import styles from "../styles/Spinner";

const Spinner = ({message, noMargin = false}) => (
  <div className={classNames(styles.Spinner, {[styles.noMargin]: noMargin})}>
    <div className={styles.loader}>
      <div className={styles.cube1}></div>
      <div className={styles.cube2}></div>
    </div>
    <div className={styles.message}>
      {message}
    </div>
  </div>
);

export default Spinner;