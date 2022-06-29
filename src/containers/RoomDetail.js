import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedRoom, selectedRoom } from "../redux/actions/roomActions";

const RoomDetail = () => {
  const { id } = useParams();
  let room = useSelector((state) => state.allRooms.current);
  const { price, personCount } = room;
  const dispatch = useDispatch();
  const fetchRoomDetail = async (id) => {
    const response = await axios
      .get(`https://62b8199bf4cb8d63df5896fd.mockapi.io/Room/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedRoom(response.data));
  };

  useEffect(() => {
    if (id && id !== "") fetchRoomDetail(id);
  }, [id]);

  return (
    <div className="ui grid container">
      {Object.keys(room).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="middle aligned row">
              <div className="column lp"></div>
              <div className="column rp">
                <h2>
                  <div className="ui teal tag label">${price}</div>
                </h2>
                <h3 className="ui brown block header">
                  Persons : {personCount}
                </h3>
                <p>{}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomDetail;
