import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/user/actions";

export default function Logout() {
  const dispatch = useDispatch();

  const Logout = () => {
    dispatch(logout());
  };

  return (
    <div className="logout">
      <h1>Log out</h1>
      <button onClick={Logout}>Logout</button>
    </div>
  );
}
