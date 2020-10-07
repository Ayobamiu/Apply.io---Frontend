import React, { Component } from "react";
import assess_applicant from "../images/grade.jpg";

class AssessApplicants extends Component {
  state = {};
  render() {
    return (
      <div className="assess-applicants">
        <div className="text">
          <i className="fa fa-book"></i>
          <h1>Assess Applicants</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            perferendis vero, nostrum iste rerum numquam esse quis ratione?
            Culpa fuga ipsa mollitia eveniet at, cum natus beatae odio hic sed!
          </p>
        </div>
        <div className="media">
          <img src={assess_applicant} width="300px" alt="" />
        </div>
      </div>
    );
  }
}

export default AssessApplicants;
