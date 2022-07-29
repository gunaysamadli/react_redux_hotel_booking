import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { reviewAdded } from "../../redux/actions/reviewAction";
import ReviewValidation from "../../Validations/ReviewValidation";
import moment from "moment";

const Review = ({RoomId}) => {


  let user = useSelector((state) => state.allUsers.user);


  const [values, setValues] = useState({
    commend: "",
    date:  moment(new Date()).format('DD.MM.YYYY HH:MM'),
    roomId:RoomId,
    userId:user.id
  });


  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, commend: e.target.value });
  };



  const history = useHistory();

  let dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    let newErrors = ReviewValidation(values);
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
    } else {
      dispatch(reviewAdded(values));
      history.push(`/room`);
    }
  };


  return (
    <div className="ui grid container">
      <div className="review-form">
        <h1>Add a Review</h1>
        <form className="bron-form" onSubmit={handleSubmit}>
          <div className="form-inputs">
           <textarea
            name="commend"
            id="commend"
            value={values.commend}
            rows="5" cols="60"
            onChange={handleChange} placeholder="Type your comments...."/>
            {errors.commend && <p className="error">{errors.commend}</p>}
          </div>
          <div className="form-inputs" >
              <input
                type="text"
                name="name"
                id="name"
                value={user.name}
                placeholder="Enter your Name"
              />
            </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Review;
