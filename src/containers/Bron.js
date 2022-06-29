import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setBrons } from "../redux/actions/bronActions";
import BronComponent from "./BronComponent";

const Bron = () => {
    const brons = useSelector((state) => state.allBrons.brons);
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

    console.log("Floors :", brons);
    return (
        <div className="ui grid container">
            <BronComponent />
        </div>
    );
};

export default Bron;