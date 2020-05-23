import React, { Component } from "react";
import "./track.css";

class Track extends Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    
  }

  /*this method that has been passed down to check if id is already there, 
      if it is not it will be added to our playlist and state will be updated */
  addTrack = () => this.props.onAdd(this.props.track);

  removeTrack = () => this.props.onRemove(this.props.track);

 

  renderAction() {
    if (this.props.isRemoval) {
      return (
        <button className="Track-action" onClick={this.removeTrack}>
          -
        </button>
      );
    } else {
      return (
        <button className="Track-action" onClick={this.addTrack}>
          +
        </button>
      );
    }
  }

  renderPlay() {
    return <button onClick={this.playTrack}>Play</button>;
  }

  render = () => (
    <div className="Track">
      <div className="Track-information">
        <h3>{this.props.track.name}</h3>
        <p>
          {this.props.track.artist} | {this.props.track.album}
        </p>
      </div>
      <button onClick={this.playTrack}>Play</button>
      {this.renderAction()}
    </div>
  );
}

export default Track;
