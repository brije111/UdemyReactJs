import React, { Component } from "react";
import SearchBar from "./SearchBar";
import { Container } from "semantic-ui-react";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const KEY = "AIzaSyAo-C3oWZh4JEWhOcnoz6WvKzbpVO5VAq4";

class App extends Component {
  state = { videos: [], selectedVideo:null };
  onSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        key: KEY,
        q: term
      }
    });
    //console.log(response.data.items);
    this.setState({videos:response.data.items});
  };

  onVideoSelect=(video)=>{
    console.log(`clicked ${video}`);
    this.setState({selectedVideo:video});
  }

  render() {
    return (
      <Container>
        <SearchBar onSubmit={this.onSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
      </Container>
    );
  }
}

export default App;
