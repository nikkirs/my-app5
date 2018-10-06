import React, { Component } from "react";
import { connect } from "react-redux";
import About from "./about";
import Photos from "./photos";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      s1: {
        backgroundColor: "#DCDCDC"
      },
      s2: {
        backgroundColor: "#DCDCDC"
      },
      s3: {
        position: "absolute",
        top: 380,
        display: "none",
        width: 611
      },
      s4: {
        position: "absolute",
        top: 380,
        display: "none",
        width: 611
      },
      i1:
        "https://images.unsplash.com/photo-1460602594182-8568137446ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c6a89cf0d31c8ed23b35aaf9a119a9f5&w=1000&q=80",
      i2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0x-U0fagakWWkXaHrEVJ_Ar3rfSTjPsVEHdUBFyIcbGSIeRy7Og"
    };
  }
  render() {
    if (!this.props.user) {
      return <div>Empty</div>;
    }
    return (
      <div>
        <div class="container" style={{ position: "relative" }}>
          <img
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
              opacity: 0.6,
              width: 611,
              height: 300
            }}
            src={this.state.i1}
          />
          <img
            style={{
              position: "absolute",
              top: 70,
              left: 100,
              zIndex: 2,
              width: 140,
              height: 130,
              borderRadius: 100
            }}
            src={this.state.i2}
          />
          <h1
            style={{
              position: "absolute",
              top: 200,
              left: 140,
              zIndex: 2,
              color: "white"
            }}
          >
            {this.props.user.name}
          </h1>
          <div
            class="row"
            style={{
              position: "absolute",
              top: 300,
              width: 611,
              height: 50,
              fontSize: 30,
              textAlign: "center"
            }}
          >
            <div
              onMouseOver={() => {
                this.setState({ s1: { backgroundColor: "#C0C0C0" } });
              }}
              onMouseOut={() => {
                this.setState({ s1: { backgroundColor: "#DCDCDC" } });
              }}
              onClick={() => {
                this.setState({
                  s3: { ...this.state.s3, display: "block" },
                  s4: { ...this.state.s3, display: "none" }
                });
              }}
              className="col-lg-6"
              style={this.state.s1}
            >
              About
            </div>
            <div
              onMouseOver={() => {
                this.setState({ s2: { backgroundColor: "#C0C0C0" } });
              }}
              onMouseOut={() => {
                this.setState({ s2: { backgroundColor: "#DCDCDC" } });
              }}
              onClick={() => {
                this.setState({
                  s4: { ...this.state.s4, display: "block" },
                  s3: { ...this.state.s3, display: "none" }
                });
              }}
              className="col-lg-6"
              style={this.state.s2}
            >
              Photos
            </div>
          </div>
        </div>
        <div style={this.state.s3}>
          <About user={this.props.user} />
        </div>
        <div style={this.state.s4}>
          <Photos />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeuser
  };
}

export default connect(mapStateToProps)(Profile);
