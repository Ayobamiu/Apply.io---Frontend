import React, { Component } from "react";
import axios from "axios";
import { getLoggedInUser } from "./user";
import NavBar from "./NavBar";

class EntryForm extends Component {
  state = {
    data: {
      first_name: "",
      last_name: "",
      file: null,
    },
  };
  handleFileChange = (event) => {
    const name = [event.target.name];
    const data = this.state.data;
    data[name] = event.target.files[0];
    this.setState({
      data,
    });
  };
  handleChange = (event) => {
    const name = [event.target.name];
    const data = this.state.data;
    data[name] = event.target.value;
    this.setState({
      data,
    });
  };
  handleSubmit = (e) => {
    const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
    e.preventDefault();
    const { id } = this.props.match.params;
    const data = new FormData();
    const user = getLoggedInUser();
    data.append("first_name", this.state.data.first_name);
    data.append("last_name", this.state.data.last_name);
    data.append("file", this.state.data.file);
    data.append("applicant", user.user_id);
    data.append("competition", id);

    axios.post(`${REACT_APP_BASE_URL}/api/entry/`, data).then((res) => {
      window.location = "/competitions";
    });
  };
  render() {
    if (!getLoggedInUser()) window.location = "/login";
    return (
      <div className="entry">
        <NavBar />
        <h3>Entry for Competition A</h3>
        <div className="form">
          <h3>Submit Entry</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="first_name"
              value={this.state.data.first_name}
              onChange={this.handleChange}
              placeholder="First Name"
            />
            <input
              type="text"
              name="last_name"
              value={this.state.data.las}
              onChange={this.handleChange}
              placeholder="Last Name"
            />
            <label htmlFor="file">Required File</label>
            <input
              type="file"
              name="file"
              id="file"
              onChange={this.handleFileChange}
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default EntryForm;
