import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";

class Competitions extends Component {
  state = {
    competitions: [],
    searchQuery: "",
    selectedCategory: "",
  };
  async componentDidMount() {
    const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
    const { data: competitions } = await axios.get(
      `${REACT_APP_BASE_URL}/api/competition/`,
      {
        headers: { "Content-Type": "application/json" },
      }
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
        <NavBar />
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
            <option value="">All Categories</option>
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
        <div className="competitions-page_competitions">
          <div className="competitions_list">
            {filtered.length === 0 ? (
              <p style={{ textAlign: "center", marginTop: "100px" }}>
                0 results found{" "}
              </p>
            ) : (
              filtered.map((competition) => (
                <Link
                  key={competition.id}
                  to={`/competition/${competition.slug}`}
                >
                  <div className="competition">
                    <h3 className="competition__title">{competition.title}</h3>
                    <div className="competition__others">
                      <p className="competition__prize">
                        <small>Prize</small>
                        <p> N{competition.prize}</p>
                      </p>
                      <p className="competition__reg">
                        <small>Reg fee</small>
                        <p>
                          {competition.reg_fee === 0
                            ? "Free"
                            : "N" + competition.reg_fee}
                        </p>
                      </p>
                    </div>
                    <p className="competition__type">{competition.category}</p>
                    <p className="competition__locality">
                      {competition.locality}
                    </p>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Competitions;
