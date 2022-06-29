import React, { useEffect } from "react";
import axios from "axios";
import {  useDispatch, useSelector } from "react-redux";
import { setRoom } from "../redux/actions/roomActions";
import RoomComponent from "./RoomComponent";

const RoomPage = ({ props }) => {
    
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

    useEffect(() => {
        fetchRooms();
    }, []);

    return (
        <div className="ui grid container">
            <RoomComponent />
        </div>
    );
};



export default RoomPage;