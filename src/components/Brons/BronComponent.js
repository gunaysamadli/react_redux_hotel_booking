import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DateAdapter from "@mui/lab/AdapterMoment";
import { deleteBron, getBrons } from "../../redux/actions/bronActions";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { LocalizationProvider } from "@mui/lab";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

const BronComponent = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrons());
  }, [dispatch]);

  const brons = useSelector((state) => state.allBrons.brons);

  useEffect(() => {
    if (brons.length) {
      setSubjectBrons(brons);
    }
  }, [brons]);

  const handleDeleted = (id) => {
    if (window.confirm("Are you sure wanted to delete the bron")) {
      dispatch(deleteBron(id));
    }
  };

  const [subjectBrons, setSubjectBrons] = useState([]);
  const [filter, setFilter] = useState({
    startDate: null,
    endDate: null,
  });

  const handleChangeStartDate = (value) => {
    setFilter((prev) => ({ ...prev, startDate: value }));
  };

  const handleChangeEndDate = (value) => {
    setFilter((prev) => ({ ...prev, endDate: value }));
  };


  const handleClearFilter = () => {
    setFilter({
      startDate: null,
      endDate: null,
      valuePrice:null
    });
    setSubjectBrons(brons);
  };

  

  const [valuePrice, setValuePrice] = useState([1, 1000]);

  const handleSliderChange = (e) => {
    setValuePrice(e.target.value);
    // const minPrice = valuePrice[0];
    // const maxPrice = valuePrice[1];
    // const newList = brons.filter(
    //   (item) => item.totalPrice >= minPrice && item.totalPrice <= maxPrice
    // );
    // setSubjectBrons(newList);
  };

  subjectBrons.sort((a, b) => b.totalPrice - a.totalPrice);

  const handleFilter = () => {
    if (brons.length) {
      let filtered = brons.filter((item) =>
        (item.totalPrice >= valuePrice[0] && item.totalPrice <= valuePrice[1]) &&
        (
          filter.startDate == null
          ? true
          : moment(item.startDate)
              .startOf("D")
              .isSame(moment(filter.startDate).startOf("D")) &&
            filter.startDate == null
          ? true
          : moment(item.endDate)
              .endOf("D")
              .isSame(moment(filter.endDate).endOf("D"))
        )
      );
      setSubjectBrons(filtered);
    }
  };

  return (
    <>
      <div className="filter">
        <div className="filter-price">
          <Typography id="range-slider" gutterBottom>
            Select Price Range:
          </Typography>
          <Slider
            value={valuePrice}
            onChange={handleSliderChange}
            min={1}
            max={1000}
          />
          <p>
            {" "}
            Your range of Price is between {valuePrice[0]} and {valuePrice[1]}
          </p>
        </div>
        <div className="filter-date">
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DesktopDatePicker
              label="Select Start date"
              inputFormat="MM/DD/yyyy"
              value={filter.startDate}
              onChange={handleChangeStartDate}
              renderInput={(params) => <TextField {...params} />}
            />
            <DesktopDatePicker
              label="Select End date"
              inputFormat="MM/DD/yyyy"
              value={filter.endDate}
              onChange={handleChangeEndDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Button onClick={handleFilter} variant="contained">
            Filter
          </Button>
          <Button onClick={handleClearFilter} color="error" variant="contained">
            Clear filter
          </Button>
        </div>
      </div>
      <div className="ui grid container">
        {subjectBrons.length ? (
          subjectBrons.map((bron) => {
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
                      <div className="bron-links">
                        <Link
                          className="bron-link"
                          onClick={() => history.push(`/editBron/${bron.id}`)}
                        >
                          Edit
                        </Link>
                        <div
                          onClick={() => handleDeleted(bron.id)}
                          className="bron-link"
                        >
                          UnBooking
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="date-warning">
            There are no reservations on these dates
          </p>
        )}
      </div>
    </>
  );
};

export default BronComponent;
