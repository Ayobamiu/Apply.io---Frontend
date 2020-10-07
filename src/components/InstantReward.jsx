import React, { Component } from "react";
import reward_winners from "../images/reward.jpg";

class InstantReward extends Component {
  state = {};
  render() {
    return (
      <div className="instant-reward">
        <div className="text">
          <i className="fa fa-gifts"></i>
          <h1>Instant Reward</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            perferendis vero, nostrum iste rerum numquam esse quis ratione?
            Culpa fuga ipsa mollitia eveniet at, cum natus beatae odio hic sed!
          </p>
          {/* <button className="learn">LEARN MORE</button>
          <button>SEE EXAMPLES</button> */}
        </div>
        <div className="media">
          <img src={reward_winners} width="300px" alt="" />
        </div>
      </div>
    );
  }
}

export default InstantReward;
