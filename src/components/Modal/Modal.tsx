import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as Delete } from "../../assets/icon/delete.svg";
import { DeleteFirstModalAC } from "../../store/appReducer/appAction";
import { AppStateType } from "../../store/store";
import { IconButton } from "../IconButton/IconButton";
import { UserDelete } from "./Modals/UserDelete/UserDelete";
import { UserInfo } from "./Modals/UserInfo/UserInfo";
import styles from "./styles.module.scss";

export const Modal: React.FC = () => {
  const modalsQueue = useSelector(
    (state: AppStateType) => state.appReducer.modal.modalsQueue
  );
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(DeleteFirstModalAC());
  };

  return (
    <>
      {modalsQueue[0] ? (
        <>
          <div className={styles.backgroundBlur} onClick={closeModal} />
          <div className={styles.modalWrapper}>
            <div className={styles.modalCloseButton}>
              <IconButton onClick={closeModal}>
                <Delete />
              </IconButton>
            </div>
            <div className={styles.modalContent}>
              {modalsQueue[0] === "userModal" ? <UserInfo /> : null}
              {modalsQueue[0] === "userDelete" ? <UserDelete /> : null}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
