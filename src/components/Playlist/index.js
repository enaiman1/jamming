import React, { Component } from "react";
import TrackList from "../TrackList"
import './playlist.css'

class Playlist extends Component {
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={"New Playlist"} />
                <TrackList />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist