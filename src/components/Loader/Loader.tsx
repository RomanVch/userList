import React from "react";

import styles from "./styles.module.scss";

type LoaderPropsT = {
  size?: number;
};

export const Loader: React.FC<LoaderPropsT> = ({ size = 50 }) => {
  return (
    <div className={styles.loader} style={{ width: size, height: size }}>
      <div className={styles.spinner} style={{ width: size, height: size }} />
    </div>
  );
};
