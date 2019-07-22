import React, { Component } from "react";

class Spinner extends Component {
  render() {
    return (
      <div class="ui active inverted dimmer">
        <div class="ui text loader">{this.props.message}</div>
      </div>
    );
  }
}

Spinner.defaultProps = {
    message:"Loading..."
}

export default Spinner;
