import React, { Component } from "react";
import { Segment, Header, Embed } from "semantic-ui-react";

class VideoDetail extends Component {
  render() {
    const { video } = this.props;
    if (!video) {
      return <div>Loading...</div>;
    }

    const videoId = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(videoId);
    
    return (
      <div>
        <Embed>
          <iframe src={videoId} />
        </Embed>
        <Segment>
          <Header>{video.snippet.title}</Header>
          <p>{video.snippet.description}</p>
        </Segment>
      </div>
    );
  }
}

export default VideoDetail;
