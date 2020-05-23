import React, { Component } from "react";
import "./searchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
    };
  }

  handleClick = (event) =>
    event.target.setSelectionRange(0, event.target.value.length);

  handleKeyPress = (event) => {
    if (event.key === "Enter" && event.target.value) {
      this.search();
    }
  };

  search = () => this.state.term && this.props.onSearch(this.state.term);

  handleTermChange = (event) => this.setState({ term: event.target.value });

  render = () => (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={this.handleTermChange}
        onKeyPress={this.handleKeyPress}
        onClick={this.handleClick}
      />
      <button className="SearchButton" onClick={this.search}>
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;
