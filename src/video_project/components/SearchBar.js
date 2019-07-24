import React, { Component } from "react";
import { Segment, Form, FormField} from "semantic-ui-react";

class SearchBar extends Component {
  state = { term: "" };

  onInputChange = event => {
    //console.log(event.target.value);
    this.setState({term:event.target.value});
  };

  onFormSubmit=(event)=>{
      event.preventDefault();
      this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <Segment className="search-bar">
        <Form onSubmit={this.onFormSubmit}>
          <FormField>
            <label>Video Search</label>
            <input
              value={this.state.term}
              type="text"
              onChange={this.onInputChange}
            />
          </FormField>
        </Form>
      </Segment>
    );
  }
}

export default SearchBar;
