import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setRoom } from "../redux/actions/roomActions";
import ProductComponent from "./RoomComponent";

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

    let data = [...response.data]


    if (FlourId) {
      console.log("tese");
      data = data.filter((room) => room.FlourId === parseInt(FlourId))
    }

    dispatch(setRoom(data));
  };
  useEffect(() => {
    fetchRooms();
  }, []);
  return (
    <div className="ui grid container">
      {Object.keys(rooms).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <ProductComponent rooms={rooms} />
      )}
    </div>
  );
};

export default FloorDetails;