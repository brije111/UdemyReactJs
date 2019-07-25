import React, { Component } from "react";
import SearchBar from "./SearchBar";
import { Container, Grid, GridRow, GridColumn } from "semantic-ui-react";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const KEY = "AIzaSyAo-C3oWZh4JEWhOcnoz6WvKzbpVO5VAq4";

class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSubmit("ReactJs");
  }

  onSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        key: KEY,
        q: term
      }
    });
    //console.log(response.data.items);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    console.log(`clicked ${video}`);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <Container>
        <SearchBar onSubmit={this.onSubmit} />
        <Grid>
          <GridRow>
            <GridColumn width={11}>
              <VideoDetail video={this.state.selectedVideo} />
            </GridColumn>
            <GridColumn width={5}>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    );
  }
}

export default App;
