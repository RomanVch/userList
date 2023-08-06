import React from "react";
import { useSelector } from "react-redux";

import { AppStateType } from "../../../../store/store";
import styles from "./styles.module.scss";

export const UserInfo: React.FC = () => {
  const user = useSelector(
    (state: AppStateType) => state.appReducer.modal.openUser
  );
  if (!user) {
    return <div>User not found</div>;
  }
  return (
    <div>
      <p>
        <span className={styles.label}>Company: </span>
        {user.company.name}
      </p>
      <p>
        <span className={styles.label}>City: </span>
        {user.address.city}
      </p>
      <p>
        <span className={styles.label}>Street: </span>
        {user.address.street}
      </p>
      <p>
        <span className={styles.label}>Suite: </span>
        {user.address.suite}
      </p>
      <p>
        <span className={styles.label}>Zip code: </span>
        {user.address.zipcode}
      </p>
    </div>
  );
};
