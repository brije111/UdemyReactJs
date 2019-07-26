import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const { user } = this.props;
    if (!user) return null;

    return <h4>user.name</h4>;
  }
}

const mapStateToProp = (state, ownProps) => {
  return {
    user: state.users.find(item => item.id === ownProps.usetId)
  };
};
export default connect(
  mapStateToProp,
  { fetchUser }
)(UserHeader);
