import React, { Component } from "react";
import create_competition from "../images/create_competition.png";
import { Link } from "react-router-dom";

class CompetitionDetails extends Component {
  state = {};
  render() {
    return (
      <div className="competition-details">
        <div className="text">
          <h1>Run Competition</h1>
          <p>
            Set criteria and competition types, set your attractive prizes and
            get ready to roll
          </p>
          <Link to="/competition_ads">
            <button className="learn">LEARN MORE</button>
          </Link>
          <Link to="/competitions">
            <button>SEE EXAMPLES</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default CompetitionDetails;
