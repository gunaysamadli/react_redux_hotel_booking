import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, setUser, userEdit } from "../redux/actions/userActions";
import { getRoles } from "../redux/actions/roleActions";
import Dropdown from "react-bootstrap/Dropdown";

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


  useEffect(() => {
    dispatch(getRoles());
  }, [dispatch]);

  const Admin = useSelector((state) => state.allRoles.isAdmin);
  console.log("user", user);

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
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{display:"flex",alignItems:"center"}}>
                <PersonIcon />
                <p style={{padding:"0 10px"}}>{user.name ? user.name : keepUser ? keepUser.name : ""}</p>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                {Admin  &&  (user.RoleId === Admin.id)  ? (
                  <>
                    <div>
                      {" "}
                      <Dropdown.Item>
                        <Link to={`/user`}>All Users</Link>
                      </Dropdown.Item>
                    </div>{" "}
                    <div>
                      {" "}
                      <Dropdown.Item >
                        <Link to={`/roleList`}>All Roles</Link>
                      </Dropdown.Item>
                    </div>
                  </>
                ) : (
                  ""
                )}
                <div edge="end" color="inherit" onClick={() => handleSignOut()}>
                  <Dropdown.Item>
                    <Link to="/">SignOut</Link>
                  </Dropdown.Item>
                </div>
                </Dropdown.Menu>
              </Dropdown>
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
