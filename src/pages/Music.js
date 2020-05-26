import React, { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import SearchResults from "../components/SearchResults/SearchResults";
import Playlist from "../components/Playlist/Playlist";
import Spotify from "../util/Spotify";

const audio = document.createElement('audio')
function Music (){
    
  const [searchResults, setSearchResult] = useState([])
  const [playlistTracks, setPlaylistTracks] = useState([])
  const [playlistName, setPlaylistName] = useState("My Playlist")
      
   
  
    // this method from results to playlist
   const addTrack = (track) => {
      let tracks = playlistTracks;
      // check to see if a matching id. if the track id matches an id that is already in our tracks array we will return
      if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
        return;
      }
      // if the id is new we will add it to the array at the bottom
      tracks.push(track);
      setPlaylistTracks(tracks);
    };
  
    // this method removes a saved song from the playlist
    const removeTrack = (track) => {
      let tracks = playlistTracks;
      tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);
  
      setPlaylistTracks(tracks);
    };
  
    const playTrack = (track) => {
      if(track.preview === null){
        alert("demo is unaviable")
      }
  
      audio.src = track.preview
      console.log(`this is from track: ${track.name}`)
      audio.load()
      audio.play()
      
    }
  
    //this method allows users to change the playlist name
    const updatePlaylistName = (name) => setPlaylistName( name );
  
    const savePlaylist = () => {
      const trackUris = playlistTracks.map((track) => track.uri);
      // after playlist is sent, we reset the playlist to a generic state
      Spotify.savePlaylist(playlistName, trackUris).then(() => {
        
          setPlaylistName(playlistName)
          setPlaylistTracks([])
        
      });
    }
  
   const search = (searchTerm) => {
      Spotify.search(searchTerm).then((results) => {
        setSearchResult(results);
        console.log(results)
      });
    }
  
    return(
      <div>
        
        <div className="App">
          <SearchBar onSearch={search} />
          <div className="App-playlist">
              <SearchResults
                searchResults={searchResults}
                onAdd={addTrack}
                onPlay={playTrack}
              />
            <Playlist
              playlistName={playlistName}
              playlistTracks={playlistTracks}
              onRemove={removeTrack}
              onNameChange={updatePlaylistName}
              onSave={savePlaylist}
              onPlay={playTrack}
            />
          </div>
        </div>
      </div>
    );
  }



// class Music extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       searchResults: [],
//       playlistTracks: [],
//       playlistName: "My Playlist",
//     };
//     this.audio = document.createElement('audio')
//   }

//   // this method from results to playlist
//   addTrack = (track) => {
//     let tracks = this.state.playlistTracks;
//     // check to see if a matching id. if the track id matches an id that is already in our tracks array we will return
//     if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
//       return;
//     }
//     // if the id is new we will add it to the array at the bottom
//     tracks.push(track);
//     this.setState({ playlistTracks: tracks });
//   };

//   // this method removes a saved song from the playlist
//   removeTrack = (track) => {
//     let tracks = this.state.playlistTracks;
//     tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);

//     this.setState({ playlistTracks: tracks });
//   };

//   playTrack = (track) => {
//     if(track.preview === null){
//       alert("demo is unaviable")
//     }

//     this.audio.src = track.preview
//     console.log(`this is from track: ${track.name}`)
//     this.audio.load()
//     this.audio.play()
    
//   }

//   //this method allows users to change the playlist name
//   updatePlaylistName = (name) => this.setState({ playlistName: name });

//   savePlaylist = () => {
//     const trackUris = this.state.playlistTracks.map((track) => track.uri);
//     // after playlist is sent, we reset the playlist to a generic state
//     Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
//       this.setState({
//         playlistName: "New Playlist",
//         playlistTracks: [],
//       });
//     });
//   }

//   search = (searchTerm) => {
//     Spotify.search(searchTerm).then((results) => {
//       this.setState({ searchResults: results });
//       console.log(results)
//     });
//   }

//   render = () => (
//     <div>
      
//       <div className="App">
//         <SearchBar onSearch={this.search} />
//         <div className="App-playlist">
//             <SearchResults
//               searchResults={this.state.searchResults}
//               onAdd={this.addTrack}
//               onPlay={this.playTrack}
//             />
//           <Playlist
//             playlistName={this.state.playlistName}
//             playlistTracks={this.state.playlistTracks}
//             onRemove={this.removeTrack}
//             onNameChange={this.updatePlaylistName}
//             onSave={this.savePlaylist}
//             onPlay={this.playTrack}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

export default Music;