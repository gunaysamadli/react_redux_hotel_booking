import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RoomListing from "./components/RoomListing";
import Header from "./components/Header";
import RoomDetail from "./components/RoomDetail";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Floor from "./components/Floor";
import Bron from "./components/Bron";
import BronComponent from "./components/BronComponent";
import FloorDetails from "./components/FloorDetail";
import { BrowserRouter } from "react-router-dom";
import EditBron from "./components/EditBron";

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
