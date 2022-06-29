import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BronComponent = () => {
  const brons = useSelector((state) => state.allBrons.brons);
  const renderList = brons.map((bron) => {
    const { id, FullName, TotalPrice,startDate,endDate } = bron;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/bron/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image floor">
                <h1>Bron</h1>
              </div>
              <div className="content">
                <div className="header">  {FullName}</div>
                <div className="meta price">Total Price : {TotalPrice}</div>
                <p>
                  <p> Start Date {startDate}</p>
                  <p> End Date {endDate}</p>
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default BronComponent;