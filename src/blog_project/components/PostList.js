import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import { List, Image } from "semantic-ui-react";
import UserHeader from "./UserHeader";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map(post => (
      <List.Item key={post.id}>
        <List.Icon name='github' size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header>{post.title}</List.Header>
          <List.Description>{post.body}</List.Description>
          <UserHeader userId={post.userId} />
        </List.Content>
      </List.Item>
    ));
  }

  render() {
    return <List divided relaxed>{this.renderList()}</List>;
  }
}

const mapStateToProp = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProp,
  { fetchPosts }
)(PostList);
