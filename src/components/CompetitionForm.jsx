import React, { Component } from "react";
import axios from "axios";
import { getLoggedInUser } from "./user";
import NavBar from './NavBar';

class CompetitionForm extends Component {
  state = {
    data: {
      details: "", 
      max_entry: "",
      rules: "",
      reg_fee: "",
      media: null,
      category: "",
      locality: "",
      prize: "",
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

    const data = new FormData();
    const user = getLoggedInUser();
    data.append("details", this.state.data.details);
    data.append("max_entry", this.state.data.max_entry);
    data.append("rules", this.state.data.rules);
    data.append("reg_fee", this.state.data.reg_fee);
    data.append("media", this.state.data.media);
    data.append("category", this.state.data.category);
    data.append("locality", this.state.data.locality);
    data.append("prize", this.state.data.prize);
    data.append("organizer", user.user_id);

    axios.post(`${REACT_APP_BASE_URL}/api/competition/`, data).then((res) => {
      window.location = "/competitions";
    });
  };
  render() {
    return (
      <div className="competition-form">
        <NavBar/>
        <h3>Add A New Competition</h3>
        <form onSubmit={this.handleSubmit}>
          <textarea
            type="text"
            name="details"
            value={this.state.data.details}
            onChange={this.handleChange}
            placeholder="Details."
          />
          <input
            type="number"
            name="max_entry"
            value={this.state.data.max_entry}
            onChange={this.handleChange}
            placeholder="Max Entries. e.g. 3000"
          />
          <textarea
            type="text"
            name="rules"
            value={this.state.data.rules}
            onChange={this.handleChange}
            placeholder="Rules"
          />
          <input
            type="number"
            name="reg_fee"
            value={this.state.data.reg_fee}
            onChange={this.handleChange}
            placeholder="Registration Fee"
          />
          <input
            type="text"
            name="category"
            value={this.state.data.category}
            onChange={this.handleChange}
            placeholder="Category of Competition. e.g. Sport.."
          />
          <input
            type="text"
            name="locality"
            value={this.state.data.locality}
            onChange={this.handleChange}
            placeholder="Locality. e.g Africa"
          />
          <input
            type="number"
            name="prize"
            value={this.state.data.prize}
            onChange={this.handleChange}
            placeholder="Prize"
          />
          <label htmlFor="media">Media</label>
          <input
            type="file"
            name="media"
            id="media"
            onChange={this.handleFileChange}
          />
          <button type="submit">Add Competition</button>
        </form>
      </div>
    );
  }
}

export default CompetitionForm;
