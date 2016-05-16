import React from "react";

import styles from "../styles/Avatar";

const Avatar = ({name, avatar, size = 80}) => (
  <div className={styles.Avatar}>
    <img title={name} src={avatar + "?s=" + size} width={size} height={size} />
  </div>
);

export default Avatar;