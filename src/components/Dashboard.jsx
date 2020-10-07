import React, { Component } from "react";
import axios from "axios";
import { getLoggedInUser } from "./user";

class Dashboard extends Component {
  state = {
    competitions: [],
    entries: [],
  };
  async componentDidMount() {
    const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
    const { data: competitions } = await axios.get(
      `${REACT_APP_BASE_URL}/api/competition/`
    );
    const { data: entries } = await axios.get(
      `${REACT_APP_BASE_URL}/api/entry/`
    );
    this.setState({
      competitions,
      entries,
    });
  }
  handleAllow = (entry) => {
    const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
    const data = new FormData();
    const user = getLoggedInUser();
    data.append("allowed", entry.allowed ? "false" : "true");
    data.append("applicant", user.user_id);
    axios.patch(`${REACT_APP_BASE_URL}/api/entry/${entry.id}/`, data);
    window.location = "/dashboard";
  };

  render() {
    const { competitions } = this.state;
    const { profiles, user } = this.props;
    const myProfile = profiles.filter(
      (profile) => profile.user === user.user_id
    )[0];
    const myCompetitions = competitions.filter(
      (competition) => competition.organizer === user.user_id
    );
    let competitionIds = [];
    for (let index = 0; index < myCompetitions.length; index++) {
      const element = myCompetitions[index];
      competitionIds.push(element.id);
    }
    const myEntries = this.state.entries.filter((entry) =>
      competitionIds.includes(entry.competition)
    );
    return (
      <React.Fragment>
        <div className="dashboard">
          <div className="sidenav">
            <a className="about" href="#about">
              <small className="side-text">About</small>
              <i className="fa fa-at side-icon"></i>
            </a>
            <a className="services" href="#services">
              <small className="side-text">Services</small>
              <i className="fab fa-servicestack side-icon"></i>
            </a>
            <a className="clients" href="#clients">
              <small className="side-text">Clients</small>
              <i className="fa fa-user side-icon"></i>
            </a>
            <a className="contact" href="#contact">
              <small className="side-text">Contact</small>
              <i className="fa fa-phone side-icon"></i>
            </a>
          </div>

          <div className="main">
            <h3>
              {myProfile
                ? myProfile.first_name + " " + myProfile.last_name + "'s "
                : "Organizer's"}
              Dashboard
            </h3>
            {myEntries.map((entry) => (
              <div key={entry.id} className="competition">
                <hr />
                <table className="dashboard-competition-table">
                  <caption>Entries for Competition {entry.id}</caption>
                  <thead>
                    <tr>
                      <th>Applicants</th>
                      <th>File</th>
                      <th>Status</th>
                      <th>Allowed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {entry.first_name} {entry.last_name}
                      </td>
                      <td>file name</td>
                      <td>
                        {entry.status === "" || entry.status === null
                          ? "None"
                          : entry.status}
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          onChange={this.handleAllow}
                          checked={entry.allowed}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
