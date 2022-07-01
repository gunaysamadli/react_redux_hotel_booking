import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedRoom } from "../redux/actions/roomActions";
import { Link } from "react-router-dom";

const RoomDetail = () => {
  const { id } = useParams();

  const brons = useSelector((state) => state.allBrons.brons);

  const [bronData, setBronData] = useState([]);

  useEffect(() => {
    if (brons.length > 0) {
      let data = brons.filter((bron) => bron.RoomId === id);
      setBronData(data);
    }
  }, [brons]);

  let room = useSelector((state) => state.allRooms.current);
  const { price, person } = room;
  const dispatch = useDispatch();
  const fetchRoomDetail = async (id) => {
    const response = await axios
      .get(`https://62b8199bf4cb8d63df5896fd.mockapi.io/Room/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedRoom(response.data));
  };

  useEffect(() => {
    if (id && id !== "") fetchRoomDetail(id);
  }, [id]);

  return (
    <div className="ui grid container">
      {bronData.length > 0 ? (
        <div className="ui link cards">
          <div className="card">
            <Link to={`/room-detail/${id}`} className="image bron">
              <ol>
                {bronData.map((bron) => (
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
            <div className="bron-links">
              <div className="bron-link">Edit</div>
              <div className="bron-link">UnBooking</div>
            </div>
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
  );
};

export default RoomDetail;
