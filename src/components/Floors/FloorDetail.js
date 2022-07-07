import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setRoom } from "../../redux/actions/roomActions";
import RoomComponent from "../Rooms/RoomComponent";
import { setBrons } from "../../redux/actions/bronActions";

const FloorDetails = () => {
  const { FlourId } = useParams();

  const rooms = useSelector((state) => state.allRooms.rooms);
  const dispatch = useDispatch();
  const fetchRooms = async () => {
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
    <div className="ui grid container">
      {Object.keys(rooms).length === 0 ? (
        <div>...Loading</div>
      ) : rooms && rooms.length ? (
        rooms.map((room) => <RoomComponent room={room} />)
      ) : null}
    </div>
  );
};

export default FloorDetails;
