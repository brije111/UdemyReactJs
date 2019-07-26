import React, { Component } from "react";
import { connect } from "react-redux";

class SongDetail extends Component {
  render() {
    if (!this.props.song) {
      return <div>Select a song</div>;
    }
    return (
      <div>
        <h4>Details</h4>
        <p>
          Title: {this.props.song.title}
          <br />
          Duration: {this.props.song.duration}
        </p>
      </div>
    );
  }
}
const mapStateToProp = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProp)(SongDetail);
