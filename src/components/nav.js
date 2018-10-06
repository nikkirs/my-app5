import React, { Component } from "react";
import Search from "./search";
import { Link } from "react-router";
import { connect } from "react-redux";
import { logoutUser } from "../actions/index";

class Navbar extends Component {
  state = {};

  render() {
    if (!this.props.isLoggedIn || this.props.isLoggedIn.isLoggedIn == false) {
      return (
        <nav
          class="nav navbar  navbar-default navbar-static-top"
          // style={{
          //   backgroundColor: "rgb(92, 133, 214)"
          // }}
        >
          <div class="container" style={{ flex: 0.7, width: 800 }}>
            {console.log(this.props.isLoggedIn)}
            <div class="navbar-header">
              <a href="/" class="navbar-brand">
                NikMusiK
              </a>
              <button
                type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar" />
                <span class="icon-bar" />
                <span class="icon-bar" />
              </button>
            </div>
            <div
              class="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <div class="nav navbar-nav">
                <li>
                  <a href="/">Home</a>
                </li>
              </div>
              <div class="nav navbar-nav navbar-right">
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>

                <li>
                  <Link to="/signup">Signup</Link>
                </li>
              </div>
            </div>
          </div>
        </nav>
      );
    }
    return (
      <nav class="navbar navbar-inverse navbar-static-top">
        <div class="container">
          <div class="navbar-header">
            <a href="/" class="navbar-brand">
              <i class="fas fa-headphones-alt" />
              NikMusiK
            </a>
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar" />
              <span class="icon-bar" />
              <span class="icon-bar" />
            </button>
          </div>
          <div
            class="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <div class="nav navbar-nav">
              <li>
                <a href="/">Home</a>
              </li>
            </div>
            <div class="nav navbar-nav navbar-right">
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li onClick={this.props.logoutUser}>
                <Link>Logout</Link>
              </li>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
function mapStateToProps(state) {
  return { isLoggedIn: state.isLoggedIn };
}
export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
