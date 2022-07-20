import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, setUser, userEdit } from "../redux/actions/userActions";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const users = useSelector((state) => state.allUsers.users);

  const user = useSelector((state) => state.allUsers.user);

  const [keepUser, setKeepUser] = useState();

  
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token && users && users.length) {
      let findUserForToken = users.filter((user) => {
        if (user.token === token) return user;
      });
      setKeepUser(findUserForToken[0]);  
    }
  }, [users]);

  useEffect(() => {
    if (keepUser) {
      dispatch(setUser(keepUser));
    }
  }, [keepUser]);

  

  // useEffect(() => {
  //   const token = JSON.parse(localStorage.getItem("token"));
  //   if(token===null){
  //     setKeepUser("");
  //   }
  // }, [users]);

  const [values, setValues] = useState({
    token: "",
  });

  const handleSignOut = () => {
    dispatch(userEdit(values, user.id));
    dispatch(setUser(null));
    localStorage.removeItem("token");
    history.push("/");
  };




  return (
    <div className="ui fixed menu">
      <div
        className="ui container header"
        style={{ display: "flex", alignItems: "center" }}
      >
        <h1 className="logo">Otel Rezervation</h1>
        <div className="header-links">
          {/* <div className="user-icon">
            <PersonIcon />
          </div> */}
          {user  ? (
            <>
              <Link to={`/floor`}>All Flours</Link>
              <Link to={`/room`}>All Rooms</Link>
              <Link to={`/brons`}>All Brons</Link>
              <Link to={`/user`}>All Users</Link>
              <div edge="end" color="inherit" onClick={() => handleSignOut()}>
                <Link to="/">SignOut</Link>
              </div>
              <p>{user.name ? user.name : keepUser ? keepUser.name : ""}</p>
            </>
          ) : (
            <div className="login-register">
              <Link
                to={`/`}
                onClick={() => history.push(`/editBron/${users.id}`)}
              >
                Login
              </Link>
              <Link to={`/register`}>Register</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
