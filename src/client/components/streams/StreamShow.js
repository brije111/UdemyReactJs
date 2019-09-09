import React, { Component } from 'react'
import { connect } from 'react-redux';
import { editStream, fetchStream } from '../../actions'
import _ from 'lodash';
import StreamForm from './StreamForm';

class StreamShow extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }
    onSubmit = (formValues) => {
        //console.log(formValues);
        this.props.editStream(this.props.match.params.id, formValues);
    }
    render() {
        if(!this.props.stream)
            return <div>Loading...</div>
        
        const {title, description} = this.props.stream;
        return (
            <div>
                <h1>{title}</h1>
                <h3>{description}</h3>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.stream[ownProps.match.params.id]
    }
}
export default connect(mapStateToProps, { fetchStream })(StreamShow);