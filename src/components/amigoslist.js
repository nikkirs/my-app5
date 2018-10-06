import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectedUser } from "../actions/index";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.isLoggedIn) {
      return (
        <div class="list-group" style={{ width: 200, marginTop: 0 }}>
          <input
            style={{
              height: 50,
              width: 200,
              fontSize: 30,
              textAlign: "center"
            }}
            placeholder="Search"
          />

          {this.props.amigos.map(amigo => {
            return (
              <a
                class="list-group-item "
                style={{
                  fontSize: 15,
                  textAlign: "center",
                  display: "block",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  cursor: "pointer"
                }}
                onClick={() => {
                  this.props.selectedUser(amigo);
                }}
              >
                {amigo.name}
              </a>
            );
          })}
        </div>
      );
    }
    return (
      <div class="list-group" style={{ width: 200, marginTop: 0 }}>
        <input
          style={{
            height: 50,
            width: 200,
            fontSize: 30,
            textAlign: "center"
          }}
          placeholder="Search"
        />
        {this.props.amigos.map(user => {
          if (user.name == this.props.isLoggedIn.loggedinuser) {
            return;
          }
          return (
            <li
              className="list-group-item list-group-item-action"
              style={{ fontSize: 20, textAlign: "center", cursor: "pointer" }}
              onClick={() => {
                this.props.selectedUser(user);
              }}
            >
              {user.name}
            </li>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    amigos: state.amigos.all,
    isLoggedIn: state.isLoggedIn
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectedUser }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
