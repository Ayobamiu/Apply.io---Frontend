import React, { Component } from "react";
import { Link } from 'react-router-dom';

class HostACompetition extends Component {
  state = {};
  render() {
    return (
      <div className="host-competition"> 
        <h1>Ready to Host a Competition?</h1>
        <Link to="/add-competition">
          <button>START NOW</button>
        </Link>
      </div>
    );
  }
}

export default HostACompetition;
