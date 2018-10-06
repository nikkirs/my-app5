import React, { Component } from "react";
import { storage } from "../firebase/index";
import { addPic, fetchUsers } from "../actions/index";
import { connect } from "react-redux";
class Photos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      url: "",
      progress: 0,
      s: {
        display: "none"
      }
    };
  }
  handleChange(event) {
    if (event.target.files[0]) {
      console.log(event.target.files[0]);
      this.setState({ image: event.target.files[0] });
    }
  }
  handleSubmit() {
    const upload = storage
      .ref(`images/${this.state.image.name}`)
      .put(this.state.image);
    upload.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(progress);
        this.setState({ progress });
        if (progress == 100) {
          this.setState({ s: { display: "block" } });
        }
      },
      error => {},
      () => {
        storage
          .ref("images")
          .child(this.state.image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            this.setState({ url });
            this.props.addPic(this.props.user.name, url);
          });
      }
    );
  }
  render() {
    return (
      <div>
        <div class="container">
          <input
            type="file"
            onChange={this.handleChange.bind(this)}
            style={{
              border: "1px solid #ccc",
              display: "inline-block",
              padding: "6px 12px",
              cursor: "pointer",
              backgroundColor: "rgb(174, 173, 173)"
            }}
          />
          <button
            onClick={this.handleSubmit.bind(this)}
            class="btn btn-primary"
            type="submit"
          >
            Submit
          </button>
        </div>
        <div class="row">
          <div class="col-sm-6 col-md-4" style={this.state.s}>
            <div class="thumbnail">
              <img
                src={
                  this.state.url || "http://thecodeplayer.com/uploads/wt/13.png"
                }
                alt="..."
                style={{ width: 173.66, height: 173.66, cursor: "pointer" }}
              />
            </div>
          </div>
          {console.log(this.props.user.photos[0])}
          {this.props.user.photos.map(photo => {
            return (
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <img
                    src={photo}
                    alt="..."
                    style={{ width: 173.66, height: 173.66, cursor: "pointer" }}
                  />
                </div>
              </div>
            );
          })}
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
export default connect(
  mapStateToProps,
  { addPic, fetchUsers }
)(Photos);
