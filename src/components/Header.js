import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, setUser, userEdit } from "../redux/actions/userActions";
import { getAdmin, getRoles, setAdmin } from "../redux/actions/roleActions";

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
  }, [keepUser, dispatch]);

  const [values, setValues] = useState({
    token: "",
  });

  const handleSignOut = () => {
    dispatch(userEdit(values, user.id));
    dispatch(setUser(null));
    localStorage.removeItem("token");
    history.push("/");
  };

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    dispatch(getRoles());
  }, [dispatch]);

  const Admin = useSelector((state) => state.allRoles.isAdmin);


  return (
    <div className="ui fixed menu">
      <div
        className="ui container header"
        style={{ display: "flex", alignItems: "center" }}
      >
        <h1 className="logo">Otel Rezervation</h1>
        <div className="header-links">
          {user ? (
            <>
              <Link to={`/floor`}>All Flours</Link>
              <Link to={`/room`}>All Rooms</Link>
              <Link to={`/brons`}>All Brons</Link>

              <div className="user-icon" onClick={handleToggle}>
                <PersonIcon />
                <p className="user-name">
                  {user.name ? user.name : keepUser ? keepUser.name : ""}
                </p>
                <KeyboardArrowDownIcon />
              </div>
              <div className={isActive ? "user-detail " : "user-detail active"}>
                {Admin &&  (user.RoleId === Admin.id ||  keepUser.RoleId === Admin.id)  ? (
                  <>
                    <div>
                      {" "}
                      <Link to={`/user`}>All Users</Link>
                    </div>{" "}
                    <div>
                      {" "}
                      <Link to={`/roleList`}>All Roles</Link>
                    </div>
                  </>
                ) : (
                  ""
                )}
                <div edge="end" color="inherit" onClick={() => handleSignOut()}>
                  <Link to="/">SignOut</Link>
                </div>
              </div>
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
