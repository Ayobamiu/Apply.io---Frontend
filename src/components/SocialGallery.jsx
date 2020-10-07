import React, { Component } from "react";
import social_gallery from "../images/social.jpg";

class SocialGallery extends Component {
  state = {};
  render() {
    return (
      <div className="social-gallery">
        <div className="media">
          <img src={social_gallery} width="300px" alt="" />
        </div>
        <div className="text">
          <i className="fa fa-photo-video"></i>
          <h1>Social Gallery</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            perferendis vero, nostrum iste rerum numquam esse quis ratione?
            Culpa fuga ipsa mollitia eveniet at, cum natus beatae odio hic sed!
          </p>
          {/* <button className="learn">LEARN MORE</button>
          <button>SEE EXAMPLES</button> */}
        </div>
      </div>
    );
  }
}

export default SocialGallery;
