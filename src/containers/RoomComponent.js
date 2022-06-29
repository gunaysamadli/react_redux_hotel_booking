import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const RoomComponent = () => {

  const [isActive, setIsActive] = useState(null);

  const rooms = useSelector((state) => state.allRooms.rooms);

  const renderList = rooms.map((room) => {
    const { id, personCount, price, floor } = room;
    return (
      <div className="four wide column" key={id}>
        <div >
          <div className="ui link cards">
            <div  className="card">
              <Link to={`/room/${id}`} className={`image ${isActive === room && 'bron'}`}
              >
              </Link>
              <div className="content">
                <div className="header">Person Count : {personCount}</div>
                <div className="meta price">Price : $ {price}</div>
                <div className="meta">{floor}</div>
              </div>
              <button onClick={() => setIsActive(room)}>
              {
                isActive === room ? "UnBooking" : "Booking"
              }
            </button>
            </div>
            
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default RoomComponent;