import { LogOut } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../redux/fetures/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const loginUser = useSelector((state) => state?.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logOut());
    navigate("/login");
  };

  return (
    <>
      <h1>Profile</h1>
      <LogOut role="button" color="#b62020" onClick={logoutHandler} />
    </>
  );
}
