import React, { ChangeEvent } from "react";

import styles from "./styles.module.scss";

type InputPropsT = {
  placeholder: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type: string;
  className?: string;
};

export const Input: React.FC<InputPropsT> = React.memo(
  ({ placeholder, className, onChange, value, type }) => {
    return (
      <input
        placeholder={placeholder}
        className={`${styles.input} ${className}`}
        onChange={onChange}
        value={value}
        type={type}
      />
    );
  }
);
