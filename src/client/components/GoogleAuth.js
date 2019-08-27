import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions'

class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '1003104153584-rsmm11eo5fcprspidmv9e9v059tcvghi.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }
    onAuthChange = (isSignedIn) => {
        if (isSignedIn)
            this.props.signIn(this.auth.currentUser.get().getId());
        else this.props.signOut();
    }
    onSignInOutClicked = () => {
        if (this.props.isSignedIn)
            this.auth.signOut();
        else this.auth.signIn();
    }
    renderAuthButton() {
        if (this.props.isSignedIn === null)
            return null;
        else if (this.props.isSignedIn)
            return <Button color='red' onClick={this.onSignInOutClicked}>
                <Icon name='google' />
                Sign Out
        </Button>
        else return <Button color='red' onClick={this.onSignInOutClicked}>
            <Icon name='google' />
            Sign In
    </Button>
    }
    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
