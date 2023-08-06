import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as Delete } from "../../assets/icon/delete.svg";
import {
  addModalItemQueueAC,
  addUserIdOpenAC,
} from "../../store/appReducer/appAction";
import { AppStateType } from "../../store/store";
import { UserT } from "../../store/userListReducer/types";
import { IconButton } from "../IconButton/IconButton";
import styles from "./styles.module.scss";

type UserCardPropsT = {
  user: UserT;
};

export const UserCard: React.FC<UserCardPropsT> = ({ user }) => {
  const searchText = useSelector(
    (state: AppStateType) => state.userReducer.searchText
  );
  const dispatch = useDispatch();

  const highlightText = (text: string) => {
    if (!searchText) {
      return text;
    }

    const regex = new RegExp(escapeRegExp(searchText), "gi");
    const matches = text.match(regex);
    if (!matches) {
      return text;
    }

    let lastIndex = 0;
    const highlightedText: JSX.Element[] = [];

    matches.forEach((match, index) => {
      const startIndex = text.indexOf(match, lastIndex);
      const nonMatchPart = text.slice(lastIndex, startIndex);
      const matchPart = text.slice(startIndex, startIndex + match.length);

      if (nonMatchPart) {
        highlightedText.push(
          <React.Fragment key={`non-match-${index}`}>
            {nonMatchPart}
          </React.Fragment>
        );
      }

      highlightedText.push(
        <span key={`match-${index}`} className={styles.highlight}>
          {matchPart}
        </span>
      );

      lastIndex = startIndex + match.length;
    });

    if (lastIndex < text.length) {
      highlightedText.push(
        <React.Fragment key={`non-match-end`}>
          {text.slice(lastIndex)}
        </React.Fragment>
      );
    }

    return highlightedText;
  };

  const escapeRegExp = (text: string) => {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  const deleteUser = (user: UserT) => {
    dispatch(addUserIdOpenAC(user));
    dispatch(addModalItemQueueAC("userDelete"));
  };
  const openUser = (user: UserT) => {
    dispatch(addUserIdOpenAC(user));
    dispatch(addModalItemQueueAC("userModal"));
  };
  return (
    <li className={styles.userWrapper}>
      <div
        className={styles.userInfo}
        onClick={() => openUser(user)}
        role="button"
        tabIndex={0}
      >
        <p className={styles.name}>
          <span className={styles.label}>Name:</span> {highlightText(user.name)}
        </p>
        <p className={styles.userName}>
          <span className={styles.label}>Username:</span>{" "}
          {highlightText(user.username)}
        </p>
        <p className={styles.email}>
          <span className={styles.label}>Email:</span>{" "}
          {highlightText(user.email)}
        </p>
      </div>
      <IconButton onClick={() => deleteUser(user)}>
        <Delete />
      </IconButton>
    </li>
  );
};
