import React, { Component } from "react";
import TrackList from '../TrackList'
import './searchResult.css'

 class SearchResults extends Component{

  render(){
    return(
        <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults} />
      </div>
    )
  }
  
}

export default SearchResults