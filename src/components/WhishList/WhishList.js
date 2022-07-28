import React, { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { getBrons } from "../../redux/actions/bronActions";
import { getRooms } from "../../redux/actions/roomActions";
import WhishListComponent from "./WhishListComponent";

const WhishListPage = () => {

    const rooms = useSelector((state) => state.allRooms.rooms);

    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(getBrons());
      dispatch(getRooms());
    }, [dispatch]);
  
    return (
      <div className="ui grid container">
        {rooms && rooms.length
          ? rooms.map((room) => <WhishListComponent room={room} key={room.id} />)
          : null}
      </div>
    );
};

export default WhishListPage;
