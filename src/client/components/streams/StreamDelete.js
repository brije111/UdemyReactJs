import React, { Component } from 'react'
import ModalComponent from '../ModalComponent';

export default class StreamDelete extends Component {
    onPositiveButtonClicked = () => {
        console.log('positive button clicked');

    }
    onNegativeButtonClicked = () => {
        console.log('nagative button clicked');

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
