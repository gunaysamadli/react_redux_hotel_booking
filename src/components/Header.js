import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container header" style={{display:"flex",alignItems:"center"}}>
        <h1 className="logo">Otel Rezervation</h1>
        <div className="header-links">
          <Link to={`/`}>All Flours</Link>
          <Link to={`/room`}>All Rooms</Link>
          <Link to={`/brons`}>All Brons</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
