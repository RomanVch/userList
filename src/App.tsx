import React from "react";

import { Modal } from "./components/Modal/Modal";
import UsersPage from "./page/UserList/UsersPage";

const App: React.FC = () => {
  return (
    <>
      <UsersPage />
      <Modal />
    </>
  );
};

export default App;
