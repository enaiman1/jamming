import React from "react";
import TrackList from "../TrackList/TrackList";
import "./searchResult.css";

function SearchResults({ searchResults, onAdd, onPlay }) {
  return (
      <div className="SearchResults">
      <h2>Results</h2>
      <TrackList
        tracks={searchResults}
        onAdd={onAdd}
        isRemoval={false}
        onPlay={onPlay}
      />
      </div>
    
  );
}
//  class SearchResults extends Component{

//   render = () => <div className="SearchResults">
//                         <h2>Results</h2>
//                         <TrackList
//                         tracks={ this.props.searchResults }
//                         onAdd={ this.props.onAdd }
//                         isRemoval={false}
//                         onPlay={this.props.onPlay}
//                         />
//                   </div>

// }

export default SearchResults;
