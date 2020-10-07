import React, { Component } from "react";
import CompetitionDetails from "./CompetitionDetails";
import AssessApplicants from "./AssessApplicants";
import SocialGallery from "./SocialGallery";
import InstantReward from "./InstantReward";

class Operations extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="operations">
          <div className="operation-one">
            <i className="fa fa-trophy"></i>
            <h4>RUN COMPETITIONS</h4>
            <p>Add your prize, set the rules. Set up under 3 minutes</p>
          </div>
          <div className="operation-one">
            <i className="fa fa-book"></i>
            <h4>ASSESS APPLICANTS</h4>
            <p>Tools to asses your applicants and set criteria.</p>
          </div>
          <div className="operation-one">
            <i className="fa fa-photo-video"></i>
            <h4>SOCIAL GALLERY</h4>
            <p>
              Build beautiful, responsive user driven content and photo gallery
              in minutes
            </p>
          </div>
          <div className="operation-one">
            <i className="fa fa-gifts"></i>
            <h4>INSTANT REWARDS</h4>
            <p>
              Ask Users to complete predefined actions to unlock instant reward
            </p>
          </div>
        </div>
        <CompetitionDetails />
        <AssessApplicants />
        <SocialGallery />
        <InstantReward />
      </React.Fragment>
    );
  }
}

export default Operations;
