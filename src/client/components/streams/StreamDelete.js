import React, { Component } from 'react'
import ModalComponent from '../ModalComponent';
import {deleteStream} from '../../actions';
import { connect } from 'react-redux';
import history from '../../history';

class StreamDelete extends Component {
    onPositiveButtonClicked = () => {
        this.props.deleteStream(this.props.match.params.id);
        history.push('/')
    }
    onNegativeButtonClicked = () => {
        console.log('nagative button clicked');
        history.push('/');
    }
    render() {
        return (
            <div>
                <h3>Delete Stream</h3>
                <ModalComponent
                    title='Delete Stream'
                    content="Do you realy want to delete this stream?"
                    textNegative='No'
                    textPositive='Yes'
                    positiveClickHandler={this.onPositiveButtonClicked}
                    negativeClickHandler={this.onNegativeButtonClicked} />
            </div>
        )
    }
}
export default connect(null, { deleteStream })(StreamDelete);
