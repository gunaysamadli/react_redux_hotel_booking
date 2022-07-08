import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedRoom } from "../../redux/actions/roomActions";
import { Link } from "react-router-dom";
import { getBrons } from "../../redux/actions/bronActions";

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


  useEffect(() => {
    dispatch(getBrons());
  }, [dispatch]);

  let today = new Date(),
    newDate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1 <= 9
        ? "0" + (today.getMonth() + 1)
        : today.getMonth() + 1) +
      "-" +
      (today.getDate() + 1 <= 9
        ? "0" + (today.getDate() + 1)
        : today.getDate() + 1);

  let date = bronData.filter(
    (bron) => bron.startDate <= newDate && bron.endDate > newDate
  );

  return (
    <div className="ui grid container">
      {bronData.length > 0 ? (
         date.length > 0 ? (
          <div className="">
          <div className="bron-bodies ">
              {bronData.map((bron) => (
                <div className="bron-body bron">
                  <p className="bron-item">FullName : <span>{bron.fullName}</span></p>
                  <p className="bron-item">Start Date : <span>{bron.startDate}</span></p>                   
                  <p className="bron-item">End Date : <span>{bron.endDate}</span> </p>
                  <p className="bron-item">Total Price : <span>{bron.totalPrice}</span></p>
                </div>
              ))}
          </div>
          <div className="content-bron">
            <div>
              <div className="header">Person Count : {person}</div>
              <div className="meta price">Room Price : $ {price}</div>
            </div>
            <Link className="bron-link" to={`/bron/${id}`}>
              Booking
            </Link>
          </div>
         
        </div>

         ) : (
          <div className="">
          <div className="bron-bodies">
              {bronData.map((bron) => (
                <div className="bron-body">
                  <p className="bron-item">FullName : <span>{bron.fullName}</span></p>
                  <p className="bron-item">Start Date : <span>{bron.startDate}</span></p>                   
                  <p className="bron-item">End Date : <span>{bron.endDate}</span> </p>
                  <p className="bron-item">Total Price : <span>{bron.totalPrice}</span></p>
                </div>
              ))}
          </div>
          <div className="content-bron">
            <div>
              <div className="header">Person Count : {person}</div>
              <div className="meta price">Room Price : $ {price}</div>
            </div>
            <Link className="bron-link" to={`/bron/${id}`}>
              Booking
            </Link>
          </div>
         
        </div>
         )
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
