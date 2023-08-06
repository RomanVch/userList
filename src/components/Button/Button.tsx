import React from "react";

import styles from "./styles.module.scss";

type UserCardPropsT = {
  title: string;
  onClick: () => void;
  className?: string;
  color?: string;
};

export const Button: React.FC<UserCardPropsT> = ({
  title,
  onClick,
  className,
  color = "",
}) => {
  return (
    <button
      onClick={onClick}
      style={{ background: color }}
      className={`${styles.button} ${className}`}
    >
      {title}
    </button>
  );
};
