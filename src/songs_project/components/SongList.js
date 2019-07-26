import React, { Component } from "react";
import { connect } from "react-redux";
import { List, Button } from "semantic-ui-react";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map(item => {
      return (
        <List.Item key={item.title}>
          <List.Content floated="right">
            <Button primary onClick={() => this.props.selectSong(item)}>
              Select
            </Button>
          </List.Content>
          <List.Content>{item.title}</List.Content>
        </List.Item>
      );
    });
  }

  render() {
    return (
      <div>
        <List divided relaxed>
          {this.renderList()}
        </List>
      </div>
    );
  }
}

const mapStateToProp = state => {
  return { songs: state.songs };
};

export default connect(
  mapStateToProp,
  { selectSong }
)(SongList);
