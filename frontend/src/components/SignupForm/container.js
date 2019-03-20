import React, { Component } from 'react';
import propTypes from 'prop-types';
import SignupForm from './presenter';

class Container extends Component {
    state = {
        email: '',
        fullname: '',
        username: '',
        password: '',
    };
    static propTypes = {
        facebookLogin: propTypes.func.isRequired
    };
    render(){
        const { email, fullname, username, password } = this.state;
        return (
            <SignupForm 
                emailValue={email}
                fullnameValue={fullname}
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
        console.log(this.state);
    };
    _handleFacebookLogin = response => {
        const { facebookLogin } = this.props;
        facebookLogin(response.accessToken)
    }
}

export default Container;
