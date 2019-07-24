import React, { Component } from "react";
import VideoItem from "./VideoItem";
import { List, ListItem } from "semantic-ui-react";

class VideoList extends Component {
  render() {
    const { videos, onVideoSelect } = this.props;
    return (
      <List divided relaxed>
        {videos.map(item => (
          <VideoItem onVideoSelect={onVideoSelect} video={item} key={item.id.videoId} />
        ))}
      </List>
    );
  }
}

export default VideoList;
