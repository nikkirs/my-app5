import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUsers } from "../actions/index";

import Nav from "./nav";
import Dashboard from "./amigoslist";
import Profile from "./profile";

class Home extends Component {
  componentWillMount() {
    this.props.fetchUsers().then(function(data) {
      console.log(data);
    });
  }

  render() {
    if (!this.props.users) {
      return <div>Empty</div>;
    }
    return (
      <div>
        <Nav />
        {console.log(this.props.isLoggedIn)}
        <div className="conatiner">
          <div className="row">
            <div className="col-lg-2">
              <Dashboard />
            </div>
            <div className="col-lg-1" />
            <div className="col-lg-7">
              <Profile />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.amigos.all, isLoggedIn: state.isLoggedIn };
}
function mapDisplatchToProps(dispatch) {
  return bindActionCreators({ fetchUsers }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDisplatchToProps
)(Home);
