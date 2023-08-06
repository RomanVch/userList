import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Loader } from "../../components/Loader/Loader";
import { UserCard } from "../../components/UserCard/UserCard";
import { SearchUserInput } from "../../feature/SearchUserInput/Input";
import { AppStateType } from "../../store/store";
import { setSearchTextAC } from "../../store/userListReducer/userListAction";
import { getUsers } from "../../store/userListReducer/userListThunk";
import styles from "./styles.module.scss";

const UsersPage: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: AppStateType) => state.userReducer.users);
  const loading = useSelector(
    (state: AppStateType) => state.appReducer.loading
  );
  const searchText = useSelector(
    (state: AppStateType) => state.userReducer.searchText
  );
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const searchFilter = searchText.toLowerCase();
      return (
        user.name.toLowerCase().includes(searchFilter) ||
        user.username.toLowerCase().includes(searchFilter) ||
        user.email.toLowerCase().includes(searchFilter)
      );
    });
  }, [users, searchText]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const resetFilter = () => {
    dispatch(setSearchTextAC(""));
    dispatch(getUsers());
  };

  return (
    <div className="users-page">
      <h1 className={styles.header}>List of Users</h1>
      <SearchUserInput onReset={resetFilter} />
      {loading ? (
        <Loader />
      ) : (
        <ul className={styles.list}>
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersPage;
