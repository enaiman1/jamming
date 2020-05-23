import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";
import "./App.css";
import Spotify from "./util/Spotify";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      playlistTracks: [],
      playlistName: "My Playlist",
    };

  }

  // this method from results to playlist
  addTrack = (track) => {
    let tracks = this.state.playlistTracks;
    // check to see if a matching id. if the track id matches an id that is already in our tracks array we will return
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    // if the id is new we will add it to the array at the bottom
    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  };

  // this method removes a saved song from the playlist
  removeTrack = (track) => {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);

    this.setState({ playlistTracks: tracks });
  };

  //this method allows users to change the playlist name
  updatePlaylistName = (name) => this.setState({ playlistName: name });

  savePlaylist = () => {
    const trackUris = this.state.playlistTracks.map((track) => track.uri);
    // after playlist is sent, we reset the playlist to a generic state
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: "New Playlist",
        playlistTracks: [],
      });
    });
  }

  search = (searchTerm) => {
    Spotify.search(searchTerm).then((results) => {
      this.setState({ searchResults: results });
    });
  }

  render = () => (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={this.search} />
        <div className="App-playlist">
          <SearchResults
            searchResults={this.state.searchResults}
            onAdd={this.addTrack}
          />
          <Playlist
            playlistName={this.state.playlistName}
            playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack}
            onNameChange={this.updatePlaylistName}
            onSave={this.savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
