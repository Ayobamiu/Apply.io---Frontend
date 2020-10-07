import React, { Component } from "react";
import create_competition from "../images/create_competition.png";
import { Link } from "react-router-dom";

class CompetitionDetails extends Component {
  state = {};
  render() {
    return (
      <div className="competition-details">
        <div className="media">
          <img src={create_competition} width="300px" alt="" />
        </div>
        <div className="text">
          <i className="fa fa-trophy"></i>
          <h1>Run Competition</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            perferendis vero, nostrum iste rerum numquam esse quis ratione?
            Culpa fuga ipsa mollitia eveniet at, cum natus beatae odio hic sed!
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
