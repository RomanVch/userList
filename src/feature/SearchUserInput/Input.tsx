import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { AppStateType } from "../../store/store";
import { setSearchTextAC } from "../../store/userListReducer/userListAction";
import styles from "./styles.module.scss";

type SearchUserInputT = {
  onReset: () => void;
};

export const SearchUserInput: React.FC<SearchUserInputT> = React.memo(
  ({ onReset }) => {
    const dispatch = useDispatch();

    const onHandleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearchTextAC(event.target.value));
    };

    const searchText = useSelector(
      (state: AppStateType) => state.userReducer.searchText
    );

    return (
      <div className={styles.wrapperSearchUser}>
        <Input
          placeholder={"Name / Username / Email"}
          value={searchText}
          onChange={onHandleFilterChange}
          type="text"
        />
        <Button title={"Reset"} onClick={onReset} />
      </div>
    );
  }
);
