import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Validation from "../Validations/Validation";
import { useHistory, useParams } from "react-router-dom";
import { bronAdded } from "../redux/actions/bronActions";
import axios from "axios";
import { selectedRoom } from "../redux/actions/roomActions";

const Bron = () => {
  const { roomId } = useParams();

  let room = useSelector((state) => state.allRooms.current);
  const { price } = room;
  const fetchRoom = async (id) => {
    const response = await axios
      .get(`https://62b8199bf4cb8d63df5896fd.mockapi.io/Room/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedRoom(response.data));
  };

  useEffect(() => {
    if (roomId && roomId !== "") fetchRoom(roomId);
  }, [roomId]);

  const [values, setValues] = useState({
    fullName: "",
    startDate: "",
    endDate: "",
    totalPrice: "",
    RoomId: roomId,
  });

  const brons = useSelector((state) => state.allBrons.brons);


  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const history = useHistory();

  let dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    let newErrors = Validation(values, brons);
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
    } else {
      dispatch(bronAdded(values));
      history.push("/");
    }
  };

  let checkIn = Date.parse(values.startDate);
  let checkOut = Date.parse(values.endDate);

  let days = Math.floor((checkOut - checkIn) / (1000 * 60 * 60 * 24));
  let totalPrice = (values.totalPrice = Number(price) * Number(days));

  return (
    <div className="ui grid container">
      <div className="bron-forms">
        <h1>Booking Hotel Room</h1>
        <form className="bron-form" onSubmit={handleSubmit}>
          <h4>Book Number : {roomId}</h4>
          <div className="form-inputs">
            <input
              value={values.fullName}
              onChange={handleChange}
              name="fullName"
              id="fullName"
              type="text"
              placeholder="Enter your FullName"
            />
            {errors.fullName && <p className="error">{errors.fullName}</p>}
          </div>
          <div className="form-dates">
            <div className="form-inputs">
              <input
                type="date"
                name="startDate"
                id="startDate"
                placeholder="Enter start date"
                value={values.startDate}
                onChange={handleChange}
              />
              {errors.startDate && <p className="error">{errors.startDate}</p>}
            </div>
            <div className="form-inputs">
              <input
                type="date"
                name="endDate"
                id="endDate"
                placeholder="Enter end date"
                value={values.endDate}
                onChange={handleChange}
              />
              {errors.endDate && <p className="error">{errors.endDate}</p>}
            </div>
          </div>
          {errors.select && <p className="error">{errors.select}</p>}
          {errors.errorDate && <p className="error">{errors.errorDate}</p>}
          <div className="form-inputs">
            <span>Total Price : </span>
            <span>{totalPrice && totalPrice > 0 ? totalPrice : price} $</span>
          </div>
          <button type="submit">Bron the Room</button>
        </form>
        <button className="back" onClick={() => history.push("/room")}>
          Go back
        </button>
      </div>
    </div>
  );
};

export default Bron;
