import React, { Component } from "react";

class About extends Component {
  state = {
    a1: "active item",
    a2: "item",
    a3: "item",
    s1: {
      fontSize: 20
    }
  };
  render() {
    var styleq = {
      borderRight: "2px solid black"
    };
    return (
      <div className="container">
        <div
          className="row"
          style={{
            height: 40,
            backgroundColor: "grey",
            fontSize: 25,
            marginBottom: 20,
            width: 611
          }}
        >
          About
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div class="ui secondary vertical pointing menu">
              <a
                class={this.state.a1}
                style={this.state.s1}
                onClick={() => {
                  this.setState({ a1: "active item", a2: "item", a3: "item" });
                }}
              >
                Bio
              </a>
              <a
                class={this.state.a2}
                style={this.state.s1}
                onClick={() => {
                  this.setState({ a1: "item", a2: "active item", a3: "item" });
                }}
              >
                Basic Info
              </a>
              <a
                class={this.state.a3}
                style={this.state.s1}
                onClick={() => {
                  this.setState({ a1: "item", a2: "item", a3: "active item" });
                }}
              >
                Relationship
              </a>
            </div>
          </div>
          <div className="col-lg-8" />
        </div>
      </div>
    );
  }
}

export default About;
