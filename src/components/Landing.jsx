import React, { Component } from "react";
import { Link } from "react-router-dom";
 
class Landing extends Component {
  state = {};
  render() { 
    return (
      <div className="landing">
        <h1> 
          Host Competitions And <br /> Contests With <br /> Ease!
        </h1>
        <p>Tools Designed to help you grow audience</p>
        <Link to="/competition_ads">
          <button>Get Started</button>
        </Link>
      </div>
    );
  }
}

export default Landing;
