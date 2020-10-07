import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";

class Competition extends Component {
  state = { competition: {} };
  async componentDidMount() {
    const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
    const { slug } = this.props.match.params;
    const {
      data: competition,
    } = await axios.get(`${REACT_APP_BASE_URL}/api/competition/${slug}`, {
      headers: { "Content-Type": "application/json" },
    });
    this.setState({
      competition,
    });
  }
  render() {
    const { competition } = this.state;
    return (
      <div className="compp">
        <NavBar />
        <div className="comp-share">
          <Link to={`/add-entry/${competition.id}`}>
            <button>Enter Competition</button>
          </Link>
          <i className="fa fa-share-alt "></i>
        </div>
        {
          <div>
            <div className="competition-page">
              <div className="media">
                <img
                  src={competition.media}
                  alt="social_media_contest_design"
                  width="100%"
                />
              </div>
              <div className="text">
                <h3>{competition.title}</h3>
                <p>{competition.details}</p>
                <p>Price: ${competition.prize}</p>
                <p>Category: {competition.category}</p>
                <p>Location: {competition.locality}</p>
                <p>Reg Fee: {competition.reg_fee}</p>
                <p>Max Entries: {competition.max_entry}</p>
              </div>
            </div>
            <hr />
            <div className="a-b">
              <h3>Details</h3>
              <p>{competition.details}</p>
              <hr />
              <h3>Rules</h3>
              <p>{competition.rules}</p>
              <hr />
              <h3>Organizer</h3>
              <p>{competition.organizer}</p>
              <hr />
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Competition;
