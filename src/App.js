import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RoomListing from "./containers/RoomListing";
import Header from "./containers/Header";
import RoomDetail from "./containers/RoomDetail";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Floor from "./containers/Floor";
import Bron from "./containers/Bron";
import BronComponent from "./containers/BronComponent";
import FloorDetails from "./containers/FloorDetail";
import { BrowserRouter } from "react-router-dom";

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
            <Route path="/brons" component={BronComponent} />
            <Route>404 Not Found!</Route>
          </Switch>
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
