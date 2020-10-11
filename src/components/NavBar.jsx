import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getLoggedInUser } from "./user";

class NavBar extends Component {
  doTog = () => {
    const menu = document.querySelector(".test-toggle");
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
    } else {
      menu.classList.add("active");
    }
  };
  render() {
    const user = getLoggedInUser();
    return (
      <div>
        <ul className="test-toggle">
          <li className="logo">
            <Link to="/">
              <i className="fa fa-trophy fa-2x icon-logo "></i>
            </Link>
          </li>
          <li className="item">
            <Link to="/competitions">Competitions</Link>
          </li>
          {/* {user && (
            <li className="item">
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )} */}
          {!user && (
            <li className="item login">
              <Link to="/login">LOGIN</Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default NavBar;
