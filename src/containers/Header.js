import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container header">
        <h2>Otel Rezervation</h2>
        <Link to={`/room`}>
          All Rooms
        </Link>
      </div>
    </div>
  );
};

export default Header;