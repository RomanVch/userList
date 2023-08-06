import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { DeleteFirstModalAC } from "../../../../store/appReducer/appAction";
import { AppStateType } from "../../../../store/store";
import { deleteUserAC } from "../../../../store/userListReducer/userListAction";
import { Button } from "../../../Button/Button";
import styles from "./styles.module.scss";

export const UserDelete: React.FC = () => {
  const user = useSelector(
    (state: AppStateType) => state.appReducer.modal.openUser
  );
  const dispatch = useDispatch();
  if (!user) {
    return <div>User not found</div>;
  }
  const deleteUser = () => {
    dispatch(deleteUserAC(user.id));
    dispatch(DeleteFirstModalAC());
  };
  const closeModal = () => {
    dispatch(DeleteFirstModalAC());
  };
  return (
    <div>
      <p>
        Do you want to delete user
        <span className={styles.label}> {user.name}</span> ?
      </p>
      <div className={styles.wrapperButton}>
        <Button title={"Yes"} color={"red"} onClick={deleteUser} />
        <Button title={"No"} onClick={closeModal} />
      </div>
    </div>
  );
};
