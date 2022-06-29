import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const RoomComponent = () => {
  const rooms = useSelector((state) => state.allRooms.rooms);

  const renderList = rooms.map((room) => {
    const { id, personCount, price, floor } = room;
    return (
      <div className="four wide column" key={id}>
        <div>
          <div className="ui link cards">
            <div className="card">
              <Link to={`/room-detail/${id}`} className="image"></Link>
              <div className="content">
                <div className="header">Person Count : {personCount}</div>
                <div className="meta price">Price : $ {price}</div>
                <div className="meta">{floor}</div>
              </div>
              <Link className="bron-link" to={`/bron/${id}`}>
                Booking
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default RoomComponent;
