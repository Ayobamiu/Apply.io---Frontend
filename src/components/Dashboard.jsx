import React, { Component } from "react";
import axios from "axios";
import { getLoggedInUser } from "./user";
import NavBar from "./NavBar";
import image from "../images/background-check.png";

class Dashboard extends Component {
  state = {
    competitions: [],
    entries: [],
  };
  async componentDidMount() {
    const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
    const { data: competitions } = await axios.get(
      `${REACT_APP_BASE_URL}/api/competition/`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    const { data: entries } = await axios.get(
      `${REACT_APP_BASE_URL}/api/entry/`,
      {
        headers: { "Content-Type": "application/json" },
      }
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
      // <React.Fragment>
      //   <div className="dashboard">
      //     <div className="sidenav">
      //       <a className="about" href="#about">
      //         <small className="side-text">About</small>
      //         <i className="fa fa-at side-icon"></i>
      //       </a>
      //       <a className="services" href="#services">
      //         <small className="side-text">Services</small>
      //         <i className="fab fa-servicestack side-icon"></i>
      //       </a>
      //       <a className="clients" href="#clients">
      //         <small className="side-text">Clients</small>
      //         <i className="fa fa-user side-icon"></i>
      //       </a>
      //       <a className="contact" href="#contact">
      //         <small className="side-text">Contact</small>
      //         <i className="fa fa-phone side-icon"></i>
      //       </a>
      //     </div>

      //     <div className="main">
      //       <h3>
      //         {myProfile
      //           ? myProfile.first_name + " " + myProfile.last_name + "'s "
      //           : "Organizer's"}
      //         Dashboard
      //       </h3>
      //       {myEntries.map((entry) => (
      //         <div key={entry.id} className="competition">
      //           <hr />
      //           <table className="dashboard-competition-table">
      //             <caption>Entries for Competition {entry.id}</caption>
      //             <thead>
      //               <tr>
      //                 <th>Applicants</th>
      //                 <th>File</th>
      //                 <th>Status</th>
      //                 <th>Allowed</th>
      //               </tr>
      //             </thead>
      //             <tbody>
      //               <tr>
      //                 <td>
      //                   {entry.first_name} {entry.last_name}
      //                 </td>
      //                 <td>file name</td>
      //                 <td>
      //                   {entry.status === "" || entry.status === null
      //                     ? "None"
      //                     : entry.status}
      //                 </td>
      //                 <td>
      //                   <input
      //                     type="checkbox"
      //                     onChange={this.handleAllow}
      //                     checked={entry.allowed}
      //                   />
      //                 </td>
      //               </tr>
      //             </tbody>
      //           </table>
      //         </div>
      //       ))}
      //     </div>
      //   </div>
      // </React.Fragment>

      <div className="dashboard">
        <NavBar />
        <div className="dashboard_minus_nav">
          <div className="dashboard__profile">
            <div className="dashboard__profile_image">
              <img src={image} alt="" width="100%" />
            </div>
            <div className="dashboard__profile_details">
              <h1>John Doe</h1>
              <p>john@doe.com</p>
            </div>
          </div>
          <div className="dashboard__details">
            <div className="dashboard__competitions">
              <h1>my competitions</h1>
              <div className="competitions_list">
                {/* <div className="competition">
                  <h3 className="competition__title">{competition.title}</h3>
                  <div className="competition__others">
                    <p className="competition__prize">
                      <small>Prize</small>
                      <p> ${competition.prize}</p>
                    </p>
                    <p className="competition__reg">
                      <small>Reg fee</small>
                      <p>
                        {competition.reg_fee === 0
                          ? "Free"
                          : "N" + competition.reg_fee}
                      </p>
                    </p>
                  </div>
                  <p className="competition__type">{competition.category}</p>
                  <p className="competition__locality">
                    {competition.locality}
                  </p>
                </div> */}
                <div className="competition">
                  <h3 className="competition__title">Bike Race competition </h3>
                  <div className="competition__others">
                    <p className="competition__prize">
                      <small>Prize</small>
                      <p> $200</p>
                    </p>
                    <p className="competition__reg">
                      <small>Reg fee</small>
                      <p>Free</p>
                    </p>
                  </div>
                  <p className="competition__type">Sport</p>
                  <p className="competition__locality">Africa</p>
                </div>
              </div>
            </div>
            <div className="dashboard__entries">
              <h1>my entries</h1>
              <div className="dashboard__entry"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
