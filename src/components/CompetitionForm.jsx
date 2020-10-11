import React, { Component } from "react";
import axios from "axios";
import { getLoggedInUser } from "./user";
import NavBar from "./NavBar";

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
    data.append("details", e.target.details.value);
    data.append("max_entry", e.target.max_entry.value);
    data.append("rules", e.target.rules.value);
    data.append("reg_fee", e.target.reg_fee.value);
    data.append("media", e.target.media.files[0]);
    data.append("category", e.target.category.value);
    data.append("locality", e.target.locality.value);
    data.append("prize", e.target.prize.value);
    data.append("organizer", user.user_id);
    console.log(REACT_APP_BASE_URL);
    console.log(data);
    console.log(user);
    axios.post(`${REACT_APP_BASE_URL}/api/competition/`, data).then((res) => {
      window.location = "/competitions";
    });
  };
  render() {
    if (!getLoggedInUser()) window.location = "/login";
    return (
      <div className="competition-form">
        <NavBar />
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

          <select
            name="category"
            value={this.state.data.category}
            onChange={this.handleChange}
          >
            <option value="">--- Select Category ---</option>
            <option value="football">football</option>
            <option value="hackathon">hackathon</option>
            <option value="oratory">oratory</option>
            <option value="coding">coding</option>
            <option value="dance">dance</option>
            <option value="fashion">fashion</option>
            <option value="school">school</option>
            <option value="racing">racing</option>
            <option value="sport">sport</option>
          </select>
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
