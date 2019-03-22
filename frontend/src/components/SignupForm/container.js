import React, { Component } from 'react';
import propTypes from 'prop-types';
import SignupForm from './presenter';

class Container extends Component {
    state = {
        email: '',
        name: '',
        username: '',
        password: '',
    };
    static propTypes = {
        facebookLogin: propTypes.func.isRequired,
        createAccount: propTypes.func.isRequired,
    };
    render(){
        const { email, name, username, password } = this.state;
        return (
            <SignupForm 
                emailValue={email}
                nameValue={name}
                usernameValue={username}
                passwordValue={password}
                handleInputChange={this._handleInputChange}
                handleFacebookLogin={this._handleFacebookLogin}
                handleSubmit={this._handleSubmit}
            />
        )
    };
    _handleInputChange = event => {
        const { target: { value, name } } = event;
        this.setState({
            [name]: value
        })
    };
    _handleSubmit = event => {
        event.preventDefault();
        const { createAccount } = this.props;
        const { username, password, email, name } = this.state;
        createAccount(username, password, email, name);
    };
    _handleFacebookLogin = response => {
        const { facebookLogin } = this.props;
        facebookLogin(response.accessToken)
    }
}

export default Container;
