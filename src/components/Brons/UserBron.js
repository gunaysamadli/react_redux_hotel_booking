import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrons } from "../../redux/actions/bronActions";

const UserBron = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrons());
  }, [dispatch]);

  const brons = useSelector((state) => state.allBrons.brons);

  const user = useSelector((state) => state.allUsers.user);

  const findUserBron= (brons && user) && brons.filter((bron)=>bron.userId===user.id)

  return (
    <>
      <div className="ui grid container">
        {findUserBron &&  findUserBron.length ? (
          findUserBron.map((bron) => {
            return (
              <div className="four wide column" key={bron.id}>
                <div className="ui link cards">
                  <div className="card">
                    <div className="image floor">
                      <h1>Bron</h1>
                      <p>Room Number : {bron.RoomId}</p>
                    </div>
                    <div className="content">
                      <div className="header"> {bron.fullName}</div>
                      <div className="meta price">
                        Total Price : {bron.totalPrice}
                      </div>
                      <p>
                        <p> Start Date : {bron.startDate}</p>
                        <p> End Date : {bron.endDate}</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="date-warning">
            There are no room 
          </p>
        )}
      </div>
    </>
  );
};

export default UserBron;
