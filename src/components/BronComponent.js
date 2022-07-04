import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { deleteBron, setBrons } from "../redux/actions/bronActions";
import { useHistory } from "react-router-dom";

const BronComponent = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const fetchBrons = async () => {
    const response = await axios
      .get("https://62b8199bf4cb8d63df5896fd.mockapi.io/Bron")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setBrons(response.data));
  };

  useEffect(() => {
    fetchBrons();
  }, []);


  const handleDeleted = (id) => {
    if (window.confirm("Are you sure wanted to delete the bron")) {
      dispatch(deleteBron(id))
    }
  }
  const brons = useSelector((state) => state.allBrons.brons);
  const renderList = brons.map((bron) => {
    const { id, fullName, totalPrice, startDate, endDate, RoomId } = bron;
    return (
      <div className="four wide column" key={id}>
        <div className="ui link cards">
          <div className="card">
            <div className="image floor">
              <h1>Bron</h1>
              <p>Room Number : {RoomId}</p>
            </div>
            <div className="content">
              <div className="header">  {fullName}</div>
              <div className="meta price">Total Price : {totalPrice}</div>
              <p>
                <p> Start Date : {startDate}</p>
                <p> End Date : {endDate}</p>
              </p>
              <div className="bron-links">
                <Link className="bron-link" onClick={() => history.push(`/editBron/${id}`)}>Edit</Link>
                <div onClick={() => handleDeleted(id)} className="bron-link">UnBooking</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <div className="ui grid container">{renderList}</div>;
};

export default BronComponent;