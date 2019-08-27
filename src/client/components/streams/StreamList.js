import React, { Component } from 'react'
import { List, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';

class StreamList extends Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin = (stream) => {
        if (this.props.userId === stream.userId)
            return <List.Content floated='right'>
                <Link to={`edit/${stream.id}`}>
                    <Button primary>EDIT</Button>
                </Link>
                <Link to={`delete/${stream.id}`}>
                    <Button secondary>DELETE</Button>
                </Link>
            </List.Content>
    }

    renderCreate = () => {
        if (this.props.isSignedIn) {
            return <div style={{ textAlign: 'right' }}>
                <Link to='/new'>
                    <Button primary>Create Stream</Button>
                </Link>
            </div>
        }
    }

    renderList = () => {
        return this.props.streams.map(item => {
            return <List.Item key={item.id}>
                {this.renderAdmin(item)}
                <List.Header>{item.title}</List.Header>
                <List.Content>
                    <List.Description>
                        {item.description}
                    </List.Description>
                </List.Content>
            </List.Item>
        })
    }
    render() {
        return (
            <List divided relaxed>
                {this.renderList()}
                {this.renderCreate()}
            </List>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);

    return {
        streams: Object.values(state.stream),
        userId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}
export default connect(mapStateToProps, { fetchStreams })(StreamList);
