import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
    console.log(this.state.term);
  }
  onFormSubmit() {}
  render() {
    return (
      <form onSubmit={this.onFormSubmit} class="form-inline my-2 my-lg-0">
        <input
          value={this.state.term}
          name="search"
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={this.onInputChange.bind(this)}
        />
      </form>
    );
  }
}

export default Search;
