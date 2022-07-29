
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions/userActions";

const ReviewComponent = ({ review }) => {
  const { id, commend, date , userId } = review;

  const dispatch=useDispatch()

  let users = useSelector((state) => state.allUsers.users);

  let findReviewUser=users && users.filter((user)=>user.id===userId);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="review" key={id}>
    <div className="review-body">
          <div className="review-user-date">
              <h4 className="review-user"> {findReviewUser[0].name}</h4>
              <div className="review-date"> {date}</div>
          </div>
          <div className="review-text">
            <div className="">{commend}</div>
          </div>
        </div>
  </div>
  );
};
export default ReviewComponent;