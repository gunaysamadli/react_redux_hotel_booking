import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Validation from "../../Validations/Validation";
import { useHistory, useParams } from "react-router-dom";
import { bronEdit, getSingleBron, setBron } from "../../redux/actions/bronActions";
import axios from "axios";
import { getSingleRoom } from "../../redux/actions/roomActions";

const EditBron = () => {

  const bron = useSelector((state) => state.allBrons.bron);

  const [values, setValues] = useState({
    fullName: "",
    startDate: "",
    endDate: "",
    totalPrice: "",
    RoomId: bron.id,
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
      dispatch(bronEdit(values, id));
      history.push("/brons");
    }
  };


  const { id } = useParams();

  const fetchBron = async (id) => {
    const response = await axios
      .get(`https://62b8199bf4cb8d63df5896fd.mockapi.io/Bron/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setBron(response.data));
  };


  useEffect(() => {
    if (id && id !== "") fetchBron(id);
  }, [id]);


  useEffect(() => {
    dispatch(getSingleBron(id));
    dispatch(getSingleRoom(id))
  }, [])

  useEffect(() => {
    if (bron) {
      setValues({ ...bron })
    }
  }, [bron]);

  let room = useSelector((state) => state.allRooms.current);

  const { price } = room;

  console.log("price",price);


  let checkIn = Date.parse(values.startDate);
  let checkOut = Date.parse(values.endDate);

  let days = Math.floor((checkOut - checkIn) / (1000 * 60 * 60 * 24));
  let totalPrice = (values.totalPrice = Number(price) * Number(days));

  return (
    <div className="ui grid container">
      <div className="bron-forms">
        <h1>Edit Booking</h1>
        <form className="bron-form" onSubmit={handleSubmit}>
          <h4>Book Number : {bron.id}</h4>
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
              {errors.date && <p className="error">{errors.date}</p>}
            </div>
          </div>
          {errors.select && <p className="error">{errors.select}</p>}
          {errors.errorDate && <p className="error">{errors.errorDate}</p>}
          <div className="form-inputs">
            <span>Total Price :  </span>
            <span>{totalPrice && totalPrice > 0 ? totalPrice : price} $</span>
          </div>
          <button type="submit">Edit Booking </button>
        </form>
        <button className="back" onClick={() => history.push("/room")}>
          Go back
        </button>
      </div>
    </div>
  );
};

export default EditBron;
