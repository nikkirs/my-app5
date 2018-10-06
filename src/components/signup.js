import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../actions/index";
import { Link } from "react-router";
import { PropTypes } from "prop-types";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term1: "",
      term2: ""
    };
  }
  static contextTypes = {
    router: PropTypes.object
  };
  onInputChange1(event) {
    this.setState({ term1: event.target.value });
    console.log(this.state.term1);
  }
  onInputChange2(event) {
    this.setState({ term2: event.target.value });
    console.log(this.state.term2);
  }
  onFormSubmit(event) {
    event.preventDefault();
    this.props.createUser(this.state.term1, this.state.term2).then(() => {
      this.context.router.push("/");
    });
    this.setState({ term1: "", term2: "" });
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <input
          value={this.state.term1}
          type="text"
          placeholder="username"
          onChange={this.onInputChange1.bind(this)}
        />
        <input
          value={this.state.term2}
          type="text"
          placeholder="password"
          onChange={this.onInputChange2.bind(this)}
        />
        {console.log(this.props.isLoggedin)}
        <button type="submit">Submit</button>
      </form>
    );
  }
}
function mapStateToProps(state) {
  return { isLoggedin: state.isLoggedin };
}
export default connect(
  mapStateToProps,
  { createUser }
)(Login);
