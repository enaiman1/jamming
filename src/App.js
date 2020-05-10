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
        ],
        playlistTracks: [
          {name: "savedSong1", artist: "saveArtist1", album: "savedAlbum1", id: 4},
          {name: "savedSong2", artist: "saveArtist2", album: "savedAlbum2", id: 5},
          {name: "savedSong3", artist: "saveArtist3", album: "savedAlbum3", id: 6},
        ],
        playlistName: "playlistName",
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
  }

  // this method from results to playlist
  addTrack = track => {
      let tracks = this.state.playlistTracks;
      // check to see if a matching id. if the track id matches an id that is already in our tracks array we will return
      if(tracks.find(savedTrack => savedTrack.id === track.id)){
      return;
     }
      // if the id is new we will add it to the array at the bottom
      tracks.push(track)
      this.setState({playlistTracks: tracks})
  }

  // this method removes a saved song from the playlist
  removeTrack = track => {
      let tracks = this.state.playlistTracks;
      tracks = tracks.filter(currentTrack => currentTrack.id !== track.id )

      this.setState({playlistTracks: tracks})
  }

  //this method allows users to change the playlist name
  updatePlaylistName = name => this.setState({playlistName: name})

  savePlaylist () {
    alert("thing method is linked")
    const trackUris = this.state.playlistTracks.map(track => track.uri);
  }
  

  
  
  render = () => <div>
                      <h1>Ja<span className="highlight">mmm</span>ing</h1>
                      <div className="App">
                        <SearchBar />
                          <div className="App-playlist">
                            <SearchResults 
                              searchResults = { this.state.searchResults }
                              onAdd = { this.addTrack }
                              />
                            <Playlist 
                              playlistName = { this.state.playlistName}
                              playlistTracks = { this.state.playlistTracks }
                              onRemove = { this.removeTrack }
                              onNameChange = { this.updatePlaylistName }
                              onSave={ this.savePlaylist }
                            />
                          </div>
                      </div>
                    </div>
}

export default App;
