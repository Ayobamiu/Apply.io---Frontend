import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getLoggedInUser } from "./user";
import NavBar from "./NavBar";

class CompetitionAds extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="competition_ads">
          <NavBar />
          <div className="ads">
            <div className="text">
              <h1>
                Providing You With Tools to Run, Manage <br /> And Participate
                in <br />
                Contests <br />
              </h1>
            </div>
          </div>
          <div className="actions">
            <div className="action-1">
              <Link to="/competitions">
                <button>Join Competitions</button>
              </Link>
              <p>
                Search List Of Competitions, Participate And Stand
                <br /> Chance To Win Amazing Prizes
              </p>
            </div>
            <div className="action-2">
              <Link to={getLoggedInUser() ? "/add-competition" : "/login"}>
                <button>Start a Competition +</button>
              </Link>
              <p>
                Create Competition, Set Rules, And Invite Applicants. <br /> We
                Have Provided Tools For You To Easily Manage The Contests
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CompetitionAds;
