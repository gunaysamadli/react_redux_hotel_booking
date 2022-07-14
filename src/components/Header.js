import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch, useSelector } from "react-redux";
import { getSingleBron } from "../redux/actions/bronActions";
import { getSingleUser, getUsers, logout, userLogin } from "../redux/actions/userActions";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();



  const handleSignOut = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <div className="ui fixed menu">
      <div
        className="ui container header"
        style={{ display: "flex", alignItems: "center" }}
      >
        <h1 className="logo">Otel Rezervation</h1>
        <div className="header-links">
          <Link to={`/`}>All Flours</Link>
          <Link to={`/room`}>All Rooms</Link>
          <Link to={`/brons`}>All Brons</Link>
          {/* <div className="user-icon">
            <PersonIcon />
          </div> */}
          {""
          ? (
              <button
                edge="end"
                color="inherit"
                onClick={() => handleSignOut()}
              >
                <Link to="/">SignOut</Link>
              </button>
              
          ) : (
            <div className="login-register">
              <Link to={`/login`}>Login</Link>
              <Link to={`/register`}>Register</Link>              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
