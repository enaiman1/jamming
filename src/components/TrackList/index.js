import React, { Component } from "react";
import Track from '../Track'
import './trackList.css'

class TrackList extends Component{
    render(){
        return(
            <div className="TrackList">
    {
                     this.props.tracks.map((track) => {
                        return <Track key={track.id} track={track} />
                     })
                 }
</div>
        )
    }
}

export default TrackList