import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RoomListing from "./components/Rooms/RoomListing";
import Header from "./components/Header";
import RoomDetail from "./components/Rooms/RoomDetail";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Floor from "./components/Floors/Floor";
import Bron from "./components/Brons/Bron";
import BronComponent from "./components/Brons/BronComponent";
import FloorDetails from "./components/Floors/FloorDetail";
import { BrowserRouter } from "react-router-dom";
import EditBron from "./components/Brons/EditBron";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Floor} />
            <Route path="/room/:FlourId" component={FloorDetails} />
            <Route path="/room" component={RoomListing} />
            <Route path="/room-detail/:id" component={RoomDetail} />
            <Route path="/bron/:roomId" component={Bron} />
            <Route path="/editBron/:id" component={EditBron} />
            <Route path="/brons" component={BronComponent} />
            <Route>404 Not Found!</Route>
          </Switch>
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
