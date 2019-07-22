import React, { Component } from "react";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

class App extends Component {
  render() {
    return (
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail author="Alex" />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail author="Sam" />
        </ApprovalCard>
        <ApprovalCard>
            <h3>Warning!</h3>
          Are you sure you want to do this?
        </ApprovalCard>
      </div>
    );
  }
}
export default App;
