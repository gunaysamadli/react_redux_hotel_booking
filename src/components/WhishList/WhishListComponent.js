import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { deleteWhishList } from "../../redux/actions/whishlistAction";

const WhishListComponent = ({ room }) => {
  const { id, person, price } = room;


  const dispatch=useDispatch()

  const brons = useSelector((state) => state.allBrons.brons);

  const user = useSelector((state) => state.allUsers.user);

  const whishlistData = useSelector((state) => state.allWhishlist.whishlist);

  const handleDeleted = (id) => {
    if (window.confirm("Are you sure wanted to delete the whishList")) {
      dispatch(deleteWhishList(id));
    }
  };

  const [bronData, setBronData] = useState([]);

  useEffect(() => {
    if (brons.length > 0) {
      let data = brons.filter((bron) => bron.RoomId === id);
      setBronData(data);
    }
  }, [brons, id]);

  let today = new Date(),
    newDate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1 <= 9
        ? "0" + (today.getMonth() + 1)
        : today.getMonth() + 1) +
      "-" +
      (today.getDate() + 1 <= 9
        ? "0" + (today.getDate() + 1)
        : today.getDate() + 1);

  let date = bronData.filter(
    (bron) => bron.startDate <= newDate && bron.endDate > newDate
  );

  const findUserWhishList =(user && whishlistData) && whishlistData.filter((whishlistItem) => whishlistItem.userId === user.id);

  const whishlistIcon = findUserWhishList && findUserWhishList.filter((whishlistItem) => whishlistItem.roomId === room.id);

  return (
    <>
    {
        whishlistIcon && whishlistIcon.length>0 ? 
        (<div className="four wide column" key={id}>
        <div>
          {bronData.length > 0 ? (
            date.length > 0 ? (
              <div className="ui link cards">
                <div className="card">
                  <div className="card-whishlist" onClick={() => handleDeleted(whishlistIcon[0].id)}>
                  <FavoriteIcon />
                  </div>
                  <Link to={`/room-detail/${id}`} className="image bron">
                    <ol>
                      {bronData.slice(0, 3).map((bron) => (
                        <li key={bron.id}>
                          <p className="bron-date">
                            Start Date : {bron.startDate}
                          </p>
                          <p className="bron-date">End Date : {bron.endDate} </p>
                        </li>
                      ))}
                    </ol>
                  </Link>
                  <div className="content">
                    <div className="header">Person Count : {person}</div>
                    <div className="meta price">Price : $ {price}</div>
                  </div>
                  <Link className="bron-link" to={`/bron/${id}`}>
                    Booking
                  </Link>
                </div>
              </div>
            ) : (
              <div className="ui link cards">
                <div className="card">
                  <div className="card-whishlist"  onClick={() => handleDeleted(whishlistIcon[0].id)}>
                    <FavoriteIcon />
                  </div>
  
                  <Link to={`/room-detail/${id}`} className="image">
                    <ol>
                      {bronData.slice(0, 3).map((bron) => (
                        <li key={bron.id}>
                          <p className="bron-date">
                            Start Date : {bron.startDate}
                          </p>
                          <p className="bron-date">End Date : {bron.endDate} </p>
                        </li>
                      ))}
                    </ol>
                  </Link>
                  <div className="content">
                    <div className="header">Person Count : {person}</div>
                    <div className="meta price">Price : $ {price}</div>
                  </div>
                  <Link className="bron-link" to={`/bron/${id}`}>
                    Booking
                  </Link>
                </div>
              </div>
            )
          ) : (
            <div className="ui link cards">
              <div className="card">
                <Link to={`/room-detail/${id}`} className="image"></Link>
                <div className="content">
                  <div className="header">Person Count : {person}</div>
                  <div className="meta price">Price : $ {price}</div>
                </div>
                <Link className="bron-link" to={`/bron/${id}`}>
                  Booking
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>) : ""
    }
    </>
    
  );
};

export default WhishListComponent;
