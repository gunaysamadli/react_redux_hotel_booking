import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gettFloors } from "../../redux/actions/floorActions";
import FloorComponent from "./FloorComponent";

const Floor = () => {
  const floors = useSelector((state) => state.allFloors.floors);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gettFloors());
  }, [dispatch]);

  
  
  return (
    <div className="ui grid container">
      {floors && floors.length
        ? floors.map((floor) => <FloorComponent floor={floor} key={floor.id} />)
        : null}
    </div>
  );
};

export default Floor;
