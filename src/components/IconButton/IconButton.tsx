import React, { ReactNode } from "react";

import styles from "./styles.module.scss";

interface IconButtonProps {
  onClick: () => void;
  children: ReactNode;
  width?: number | string;
  height?: number | string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  children,
  width = 40,
  height = 40,
}) => {
  const buttonStyle = {
    width,
    height,
  };

  return (
    <button onClick={onClick} className={styles.iconButton} style={buttonStyle}>
      {children}
    </button>
  );
};
