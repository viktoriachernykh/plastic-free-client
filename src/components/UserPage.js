import React from "react";
import { useSelector } from "react-redux";

const selectUser = (reduxState) => {
  return reduxState.session.user;
};

export default function UserPageContainer() {
  const user = useSelector(selectUser);

  return (
    <div>
      user page
      <p>name: {user.name}</p>
      <p>email: {user.email}</p>
    </div>
  );
}
