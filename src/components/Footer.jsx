import React, { Component } from "react";
import logo from "../images/trophy.png";
import { Link } from "react-router-dom";
import { getLoggedInUser } from "./user";

class Footer extends Component {
  state = { user: null };
  componentDidMount() {
    const user = getLoggedInUser();
    this.setState({
      user,
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="foot">
          <div className="apps">
            <h4>Apps</h4>
            <p>
              <Link to="/competitions">
                <i className="fa fa-trophy"></i> Competitions
              </Link>
            </p>
            <p>
              <i className="fa fa-book"></i> Assess{" "}
            </p>
            <p>
              <i className="fa fa-photo-video"></i> Gallery
            </p>
            <p>
              <i className="fa fa-gifts"></i> Rewards
            </p>
          </div>
          <div className="about">
            <h4>About Apply.to</h4>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
          <div className="more">
            <h4>More</h4>
            <p>Success Stories</p>
            <p>Privacy Terms</p>
            {this.state.user && (
              <div>
                <p>
                  <Link to="/logout">Logout</Link>
                </p>
                <p>
                  <Link to="/profile">Your Profile</Link>
                </p>
              </div>
            )}
          </div>
          <div className="connect">
            <h4>Connect with us</h4>
            <a href="https://www.facebook.com">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div className="logo">
            <img src={logo} alt="logo" width="50px" />
            <p>Coppyright &copy;</p>
            <p>All Right reserved</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
