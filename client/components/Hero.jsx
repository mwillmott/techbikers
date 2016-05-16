import React from "react";
import classNames from "classnames";

import styles from "../styles/Hero";

const Hero = ({children, image = "/static/img/background.jpg", center = true}) => (
  <div className={styles.Hero} style={{backgroundImage: `url(${image})`}}>
    <div className={classNames(styles.content, {[styles.center]: center})}>
      <div className={styles.row}>
        <div className={styles.strapline}>
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default Hero;