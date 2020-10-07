import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Competitions from "./components/Competitions";
import Logout from "./components/Logout";
import CompetitionAds from "./components/CompetitionAds";
import Competition from "./components/Competition";
import EntryForm from "./components/EntryForm";
import CompetitionForm from "./components/CompetitionForm";
import NotFound from "./components/notFound";
import Profile from "./components/profile";
import axios from "axios";
import { getLoggedInUser } from "./components/user";
import Dashboard from "./components/Dashboard";

class App extends Component {
  state = { profiles: [], user: {} };
  async componentDidMount() {
    const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
    const user = getLoggedInUser();
    const { data: profiles } = await axios.get(
      `${REACT_APP_BASE_URL}/api/profile/`
    );
    this.setState({
      profiles,
      user,
    });
  }
  render() {
    const { profiles, user } = this.state;
    return (
      <React.Fragment>
        <Switch>
          <Route path="/add-competition" component={CompetitionForm} />
          <Route path="/add-entry/:id" component={EntryForm} />
          <Route path="/competitions" component={Competitions} />
          <Route
            path="/dashboard"
            render={(props) => (
              <Dashboard {...props} profiles={profiles} user={user} />
            )}
          />
          <Route path="/competition/:slug" component={Competition} />
          <Route path="/competition_ads" component={CompetitionAds} />
          <Route
            path="/profile"
            render={(props) => (
              <Profile {...props} profiles={profiles} user={user} />
            )}
          />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={HomePage} />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
