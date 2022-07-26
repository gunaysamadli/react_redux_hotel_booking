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
              <img src="https://media.istockphoto.com/photos/luxury-resort-picture-id104731717?k=20&m=104731717&s=612x612&w=0&h=40INtJRzhmU1O4Rj24zdY8vj4aGsWpPaEfojaVQ8xBo=" alt="aaa"/>
              {/* <h1>Flour</h1> */}
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
