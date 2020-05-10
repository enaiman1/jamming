import React, { Component } from "react";
import './searchBar.css'

class SearchBar extends Component {

  render = () => <div className="SearchBar">
                    <input placeholder="Enter A Song, Album, or Artist" />
                    <button className="SearchButton">SEARCH</button>
                  </div>


}


export default SearchBar