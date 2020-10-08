import React, { Component } from "react";
import NavBar from "./NavBar";
import Landing from "./Landing";
import Operations from "./Operations";
import Footer from "./Footer";
import HostACompetition from "./hostACompetition";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment> 
        <div className="section-one">
          <NavBar />
          <Landing />
        </div>
        <Operations />
        <HostACompetition />
        <Footer />
      </React.Fragment>
    );
  }
}

export default HomePage;
