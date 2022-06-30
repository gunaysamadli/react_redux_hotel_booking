import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFloors } from "../redux/actions/floorActions";
import FloorComponent from "./FloorComponent";

const Floor = () => {
  const floors = useSelector((state) => state.allFloors.floors);

  const dispatch = useDispatch();
  const fetchFloors = async () => {
    const response = await axios
      .get("https://62b8199bf4cb8d63df5896fd.mockapi.io/Flour")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setFloors(response.data));
  };

  useEffect(() => {
    fetchFloors();
  }, []);
  return (
    <div className="ui grid container">
      {floors && floors.length
        ? floors.map((floor) => <FloorComponent floor={floor} />)
        : null}
    </div>
  );
};

export default Floor;
