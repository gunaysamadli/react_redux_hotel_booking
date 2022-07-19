import React, { createContext, useEffect, useState } from "react";
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
import ReactSwitch from "react-switch";
import Login from "./components/Users/Login";
import Register from "./components/Users/Register";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./redux/actions/userActions";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toogleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  const token = JSON.parse(localStorage.getItem("token"));

  console.log(token);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUsers());
  // }, [dispatch]);

  // const users = useSelector((state) => state.allUsers.users);

  // let findUserForToken = users.filter((user) => user.token !== "");

  // let isAdmin = users.filter((user) => user.token !== "" && user.role === "Admin");

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      <div className="App" id={theme}>
        <div>
          <label className="switch-label">
            {theme === "light" ? "Light Mood" : "Dark Mood"}
          </label>
          <ReactSwitch
            className="switch"
            onChange={toogleTheme}
            checked={theme === "light"}
          />
        </div>
        <BrowserRouter>
          <Router>
            <Header />
            <Switch>
              <Route path="/floor" component={Floor} />
              <Route path="/room/:FlourId" component={FloorDetails} />
              <Route path="/room" component={RoomListing} />
              <Route path="/room-detail/:id" component={RoomDetail} />
              <Route path="/bron/:roomId" component={Bron} />
              <Route path="/editBron/:id" component={EditBron} />
              <Route path="/brons" component={BronComponent} />
              <Route path="/" exact component={Login} />
              <Route path="/register" component={Register} />
              <Route>404 Not Found!</Route>
            </Switch>
          </Router>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
