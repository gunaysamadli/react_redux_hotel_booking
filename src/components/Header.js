import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, userEdit } from "../redux/actions/userActions";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const users = useSelector((state) => state.allUsers.users);


  let isUsers = users.filter((user) => user.token.length >0);


  let name = (isUsers.map((user) => user.name));



  const handleSignOut = () => {
    // dispatch(userEdit(isUsers, isUsers.map((user) => (user.id))))
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
          <Link to={`/`}>All Flours</Link>
          <Link to={`/room`}>All Rooms</Link>
          <Link to={`/brons`}>All Brons</Link>
          {/* <div className="user-icon">
            <PersonIcon />
          </div> */}
          {isUsers && isUsers.length>0
            ? (
              <>
                <p>
                  {name}
                </p>
                <div
                  edge="end"
                  color="inherit"
                  onClick={() => handleSignOut()}
                >
                  <Link to="/">SignOut</Link>
                </div>

              </>

            ) : (
              <div className="login-register">
                <Link to={`/login`} onClick={() => history.push(`/editBron/${users.id}`)}>Login</Link>
                <Link to={`/register`}>Register</Link>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Header;
