import React, { Component } from "react";
import ProfileForm from "./profileForm";
import NavBar from "./NavBar";

class Profile extends Component {
  state = {};
  toggleProfileEdit = () => {
    const pp = document.getElementById("fine");
    if (pp.style.display === "block") {
      pp.style.display = "none";
    } else {
      pp.style.display = "block";
    }
  };

  render() {
    const { user_id } = this.props.user;
    const profiles = this.props.profiles;
    const myProfile = profiles.filter((profile) => profile.user === user_id);
    return (
      <div className="profile">
        <NavBar />
        {myProfile.map((profile) => (
          <div key={profile.id} className="profile-grid">
            <div className="photo">
              <img src={profile.image} alt="" />
            </div>
            <div className="details">
              <h1>
                {profile.first_name} {profile.last_name}
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda laborum repellendus est accusantium culpa, minima ut
                enim consequuntur, distinctio accusamus esse ducimus! Quod amet
                necessitatibus accusamus laudantium nobis reprehenderit fugiat?
              </p>
            </div>
            <div className="white">
              <i
                onClick={this.toggleProfileEdit}
                className="fa fa-lg fa-edit bottom-right"
              ></i>
            </div>
          </div>
        ))}
        <div id="fine" style={{ display: "none" }}>
          <ProfileForm myProfile={myProfile} />
        </div>
      </div>
    );
  }
}

export default Profile;
