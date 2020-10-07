import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from './NavBar';

class Competitions extends Component {
  state = {
    competitions: [],
    searchQuery: "",
    selectedCategory: "",
  };
  async componentDidMount() {
    const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
    const { data: competitions } = await axios.get(
      `${REACT_APP_BASE_URL}/api/competition/`
    );
    this.setState({
      competitions,
    });
  }
  handleSearch = (event) => {
    const searchQuery = event.target.value;
    this.setState({
      searchQuery,
    });
  };
  handleSelect = (event) => {
    const selectedCategory = event.target.value;
    this.setState({
      selectedCategory,
    });
  };
  render() {
    const { competitions, searchQuery, selectedCategory } = this.state;
    let filtered = competitions;
    if (searchQuery) {
      filtered = competitions.filter((competition) =>
        competition.title.toLowerCase().includes(searchQuery)
      );
    } else if (selectedCategory) {
      filtered = competitions.filter((competition) =>
        competition.category
          .toLowerCase()
          .includes(selectedCategory.toLowerCase())
      );
    }

    return (
      <div className="competitions-page">
        <NavBar/>
        <div className="controls">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={this.handleSearch}
          />
          <select
            name="competition_category"
            id="competition_category"
            onChange={this.handleSelect}
          >
            <option value="">--- Select a Category ---</option>
            <option value="football">Football</option>
            <option value="hackathon">Hackathon</option>
            <option value="oratory">Oratory</option>
            <option value="coding">Coding</option>
            <option value="dance">Dance</option>
            <option value="fashion">Fashion</option>
            <option value="school">School</option>
            <option value="racing">Racing</option>
            <option value="sport">Sport</option>
          </select>
        </div>
        <div className="competitions_list">
          {filtered.map((competition) => (
            <Link key={competition.id} to={`/competition/${competition.slug}`}>
              <div className="competition">
                <h3>{competition.title}</h3>
                <p>
                  <i className="fa fa-money-check-alt"></i> ${competition.prize}
                </p>
                <div className="bottom">
                  <p>
                    <i className="fa fa-layer-group"></i> {competition.category}
                  </p>
                  <p>
                    <i className="fa fa-location-arrow"></i>{" "}
                    {competition.locality}
                  </p>
                  <p>
                    Registration :{" "}
                    {competition.reg_fee === 0 ? "Free" : competition.reg_fee}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Competitions;
