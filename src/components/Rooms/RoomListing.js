import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "../../redux/actions/roomActions";
import RoomComponent from "./RoomComponent";
import { getBrons } from "../../redux/actions/bronActions";

const RoomPage = () => {
  const rooms = useSelector((state) => state.allRooms.rooms);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getBrons());
    dispatch(getRooms());
  }, [dispatch]);

  return (
    <div className="ui grid container">
      {rooms && rooms.length
        ? rooms.map((room) => <RoomComponent room={room} />)
        : null}
    </div>
  );
};

export default RoomPage;
