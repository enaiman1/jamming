import React, { Component } from "react";
import TrackList from '../TrackList/TrackList'
import './searchResult.css'

 class SearchResults extends Component{

  render = () => <div className="SearchResults">
                        <h2>Results</h2>
                        <TrackList 
                        tracks={ this.props.searchResults } 
                        onAdd={ this.props.onAdd }
                        isRemoval={false}
                        onPlay={this.props.onPlay}
                        />
                  </div> 
  
}

export default SearchResults