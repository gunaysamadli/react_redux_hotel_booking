import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const RoomComponent = ({ room }) => {
  
  const { id, person, price } = room;

  const brons = useSelector((state) => state.allBrons.brons);

  const [bronData, setBronData] = useState([]);

  useEffect(() => {
    if (brons.length > 0) {
      let data = brons.filter((bron) => bron.RoomId === id);
      setBronData(data);
    }
  }, [brons]);

  let today = new Date(),
    newDate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1 <= 9
        ? "0" + (today.getMonth() + 1)
        : today.getMonth() + 1) +
      "-" +
      today.getDate();

  let date = bronData.filter(
    (bron) => bron.startDate <= newDate && bron.endDate > newDate
  );

  return (
    <div className="four wide column" key={id}>
      <div>
        {date.length > 0 ? (
          <div className="ui link cards">
            <div className="card">
              <Link to={`/room-detail/${id}`} className="image bron">
                <ol>
                  {bronData.slice(0, 3).map((bron) => (
                    <li>
                      <p className="bron-date">Start Date : {bron.startDate}</p>
                      <p className="bron-date">End Date : {bron.endDate} </p>
                    </li>
                  ))}
                </ol>
              </Link>
              <div className="content">
                <div className="header">Person Count : {person}</div>
                <div className="meta price">Price : $ {price}</div>
              </div>
              <Link className="bron-link" to={`/bron/${id}`}>
                Booking
              </Link>
            </div>
          </div>
        ) : (
          <div className="ui link cards">
            <div className="card">
              <Link to={`/room-detail/${id}`} className="image"></Link>
              <div className="content">
                <div className="header">Person Count : {person}</div>
                <div className="meta price">Price : $ {price}</div>
              </div>
              <Link className="bron-link" to={`/bron/${id}`}>
                Booking
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomComponent;
