import React from "react";
import { Link } from "react-router-dom";

const FloorComponent = ({ floor }) => {
  const { id, maxRoomCount, title } = floor;


  return (
    <div className="four wide column" key={id}>
      <Link to={`/room/${id}`}>
        <div className="ui link cards">
          <div className="card">
            <div className="image floor">
              <h1>Flour</h1>
            </div>
            <div className="content">
              <div className="header"> {title}</div>
              <div className="meta price">Max Room Count : {maxRoomCount}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default FloorComponent;
