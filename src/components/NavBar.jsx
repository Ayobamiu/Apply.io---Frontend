import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getLoggedInUser } from "./user";

class NavBar extends Component {
  state = {
    user: {},
  };
  componentDidMount() {
    const user = getLoggedInUser();
    this.setState({
      user,
    });
  }
  doTog = () => {
    const menu = document.querySelector(".test-toggle");
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
    } else {
      menu.classList.add("active");
    }
  };
  render() {
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
          {this.state.user && (
            <li className="item">
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
          {!this.state.user && (
            <li className="item login">
              <Link to="/login">LOGIN</Link>
            </li>
          )}
          {!this.state.user && (
            <li className="item sign-up">
              <Link to="/signup">SIGN UP</Link>
            </li>
          )}
          <li className="toggle">
            <a href="#">
              <i
                onClick={this.doTog}
                style={{ color: "white" }}
                className="fa fa-bars"
              ></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
