import React, { Component } from 'react'
import { connect } from 'react-redux';
import { editStream, fetchStream } from '../../actions'
import _ from 'lodash';
import StreamForm from './StreamForm';

class StreamEdit extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }
    onSubmit = (formValues) => {
        //console.log(formValues);
        this.props.editStream(this.props.match.params.id, formValues);
    }
    render() {
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')} onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.stream[ownProps.match.params.id]
    }
}
export default connect(mapStateToProps, { editStream, fetchStream })(StreamEdit);