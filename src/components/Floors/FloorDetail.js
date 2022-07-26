import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  hideLoader,
  setRoom,
  showLoader,
} from "../../redux/actions/roomActions";
import RoomComponent from "../Rooms/RoomComponent";
import { setBrons } from "../../redux/actions/bronActions";
import { Audio } from "react-loader-spinner";
import Spinner from 'react-bootstrap/Spinner';

const FloorDetails = () => {
  const { FlourId } = useParams();

  const rooms = useSelector((state) => state.allRooms.rooms);

  const loading = useSelector((state) => state.allRooms.loading);

  const dispatch = useDispatch();
  const fetchRooms = async () => {
    dispatch(showLoader());
    const response = await axios
      .get("https://62b8199bf4cb8d63df5896fd.mockapi.io/Room")

      .catch((err) => {
        console.log("Err: ", err);
      });

    let data = [...response.data];

    if (FlourId) {
      data = data.filter((room) => room.FlourId === parseInt(FlourId));
    }

    dispatch(setRoom(data));
    dispatch(hideLoader());
  };

  const fetchBron = async () => {
    const response = await axios
      .get("https://62b8199bf4cb8d63df5896fd.mockapi.io/Bron")
      .catch((err) => {
        console.log("Err: ", err);
      });

    dispatch(setBrons(response.data));
  };

  useEffect(() => {
    fetchRooms();
    fetchBron();
  }, []);

  return (
    <div className={loading ? " ui grid container loader" : "ui grid container"}>
      {loading ? (
         <></>
      ) : (
        <>
          {Object.keys(rooms).length === 0 ? (
            <h1 className="date-warning">There are no Room on this Floor</h1>
          ) : rooms && rooms.length ? (
            rooms.map((room) => <RoomComponent room={room} />)
          ) : null}
        </>
      )}
    </div>
  );
};

export default FloorDetails;
