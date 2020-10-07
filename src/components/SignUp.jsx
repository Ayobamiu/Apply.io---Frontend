import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";
import { getLoggedInUser } from './user';

class SignUp extends Component {
  state = {
    user: {
      email: "",
      password: "",
    },
  };

  handleSubmit = (e) => {
    const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
    e.preventDefault();
    const data = this.state.user;
    axios
      .post(`${REACT_APP_BASE_URL}/api/signup/`, data)
      .then((response) => {
        window.location = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChange = (e) => {
    e.preventDefault();
    const name = [e.target.name];
    const user = this.state.user;
    user[name] = e.target.value;
    this.setState({
      user,
    });
  };
  render() {
    if (getLoggedInUser()) return <Redirect to="/" />;
    return (
      <React.Fragment>
        <div className="signup-background"></div>
        <div className="signup-page">
          <NavBar />
          <div className="signup-container">
            <div className="ads">
              <h1>
                Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit{" "}
                <br /> Voluptatem, culpa!
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                minima modi alias vero, adipisci numquam itaque minus doloribus,
                animi reprehenderit ipsam praesentium error eius sint autem ea
                maiores, voluptatibus libero!
              </p>
            </div>
            <div className="signup-form">
              <h1>Sign Up</h1>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.user.email}
                  onChange={this.handleChange}
                  placeholder="Email"
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={this.state.user.password}
                  onChange={this.handleChange}
                  placeholder="Password"
                />
                <button type="submit">Sign Up</button>
              </form>
              <p>
                Already opened an Account? <Link to="/login">Login.</Link>
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default SignUp;
