import React, { Component } from "react";
import { connect } from "react-redux";
import { List } from "semantic-ui-react";

class SongList extends Component {
  renderList() {
    return this.props.songs.map(item => {
      return (
        <List.Item>
          <List.Content>
            <List.Header>{item.title}</List.Header>
          </List.Content>
        </List.Item>
      );
    });
  }

  render() {
    console.log(this.props.songs);
    return (
      <div>
        <List>{this.renderList()}</List>
      </div>
    );
  }
}

const mapStateToProp = state => {
  return { songs: state.songs };
};

export default connect(mapStateToProp)(SongList);
