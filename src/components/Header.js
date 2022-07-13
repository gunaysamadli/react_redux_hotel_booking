import React from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
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
          <div className="login-register">
            <Link to={`/login`}>Login</Link>
            <Link to={`/register`}>Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
