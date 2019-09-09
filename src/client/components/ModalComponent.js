import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button, Header, Icon, Dimmer } from 'semantic-ui-react';
import history from '../history';

export default function ModalComponent(props) {
    return (
        ReactDOM.createPortal(
            <Dimmer active onClick={() => history.push('/')}>
                <Modal open onClick={(e) => e.stopPropagation()}>
                    <Header content={props.title} />
                    <Modal.Content>
                        <p>
                            {props.content}
                        </p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button basic color='red' onClick={props.negativeClickHandler}>
                            <Icon name='remove' /> {props.textNegative}
                        </Button>
                        <Button color='green' onClick={props.positiveClickHandler} >
                            <Icon name='checkmark' /> {props.textPositive}
                        </Button>
                    </Modal.Actions>
                </Modal>
            </Dimmer>
            ,
            document.querySelector('#modal')
        )
    )
}
