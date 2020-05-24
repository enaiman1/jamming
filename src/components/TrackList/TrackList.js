import React, { Component } from "react";
import Track from '../Track/Track'
import './trackList.css'

class TrackList extends Component {

    render =() =>  <div className="TrackList">
                        {
                            // console.log(this.props.tracks)
                            this.props.tracks.map(track => {
                            return <Track 
                            track={ track } key={ track.id }
                            onAdd={ this.props.onAdd }
                            onRemove = { this.props.onRemove }
                            isRemoval = { this.props.isRemoval }
                            onPlay={this.props.onPlay}
                            />
                            })
                    
                        }

                    </div>
    
}

export default TrackList