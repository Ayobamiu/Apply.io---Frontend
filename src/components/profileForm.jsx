import React, { Component } from "react";
import { getLoggedInUser } from "./user";
import axios from "axios";

class ProfileForm extends Component {
  state = {
    profile: {
      first_name: "",
      last_name: "",
      phone: "",
      image: null,
    },
  };
  handleImageChange = (event) => {
    const name = [event.target.name];
    const profile = this.state.profile;
    profile[name] = event.target.files[0];
    this.setState({
      profile,
    });
  };
  handleChange = (event) => {
    const name = [event.target.name];
    const profile = this.state.profile;
    profile[name] = event.target.value;
    this.setState({
      profile,
    });
  };
  handleSubmit = (event) => {
    const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
    event.preventDefault();
    const existingProfile = this.props.myProfile[0];
    const user = getLoggedInUser();
    const data = new FormData();
    data.append("first_name", this.state.profile.first_name);
    data.append("last_name", this.state.profile.last_name);
    data.append("image", this.state.profile.image);
    data.append("user", user.user_id);
    if (
      existingProfile.first_name === "" &&
      existingProfile.last_name === "" &&
      existingProfile.phone === "" &&
      existingProfile.image === null
    ) {
      axios.post(`${REACT_APP_BASE_URL}/api/profile/`, data);
    } else {
      axios.put(
        `${REACT_APP_BASE_URL}/api/profile/${existingProfile.id}/`,
        data
      );
    }
    window.location = "/profile";
  };

  render() {
    const { profile } = this.state;
    return (
      <div className="profile-form">
        <br />
        <h3>Update Profile</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            onChange={this.handleChange}
            value={profile.first_name}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            onChange={this.handleChange}
            value={profile.last_name}
          />
          <label className="custom-file-label" htmlFor="customFile">
            Choose Image
          </label>
          <input type="file" name="image" onChange={this.handleImageChange} />
          <button type="submit" className="btn btn-success my-2">
            Update
          </button>
        </form>
      </div>
    );
  }
}

export default ProfileForm;
