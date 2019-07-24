import "./VideoItem.css";
import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";

class VideoItem extends Component {
  render() {
    const { video, onVideoSelect } = this.props;
    return (
      <List.Item className="video-item" onClick={() => onVideoSelect(video)}>
        <Image src={video.snippet.thumbnails.medium.url} />
        <List.Content>
          <List.Header>{video.snippet.title}</List.Header>
        </List.Content>
      </List.Item>
    );
  }
}

export default VideoItem;
