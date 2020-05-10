import React, {Component} from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import './App.css';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      searchResults: [
        {name: "song1", artist: "artist1", album: "album1", id: 1},
        {name: "song2", artist: "artist2", album: "album2", id: 2},
        {name: "song3", artist: "artist3", album: "album3", id: 3},
      ]
    }
  }
  
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults = {this.state.searchResults}/>
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
