import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setRoom } from "../redux/actions/roomActions";
import RoomComponent from "./RoomComponent";
import { setBrons } from "../redux/actions/bronActions";

const RoomPage = () => {
  const rooms = useSelector((state) => state.allRooms.rooms);


  const dispatch = useDispatch();
  const fetchRooms = async () => {
    const response = await axios
      .get("https://62b8199bf4cb8d63df5896fd.mockapi.io/Room")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setRoom(response.data));
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
      {rooms && rooms.length
        ? rooms.map((room) => <RoomComponent room={room} />)
        : null}
    </div>
  );
};

export default RoomPage;
