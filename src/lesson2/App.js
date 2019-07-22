import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends Component {
  state = {
    lat: null,
    lng: null,
    errorMessage: ""
  };

  componentDidMount() {
    console.log("my component just mount");
    navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }),
      err =>
        this.setState({
          errorMessage: err.message
        })
    );
  }

  componentDidUpdate() {
    console.log("my component just updated");
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat)
      return <div>Error : {this.state.errorMessage}</div>;

    if (!this.state.errorMessage && this.state.lat)
      return <SeasonDisplay lat={this.state.lat} />;

    return <Spinner message="Please allow reading location" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

export default App;
