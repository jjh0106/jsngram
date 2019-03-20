import React, { Component } from 'react';
import propTypes from 'prop-types';
import LoginForm from './presenter';

class Container extends Component {
    state = {
        username: '',
        password: '',
    };
    static propTypes = {
        facebookLogin: propTypes.func.isRequired,
        usernameLogin: propTypes.func.isRequired
    };
    render(){
        const { username, password } = this.state;
        return (
            <LoginForm 
                handleInputChange={this._handleInputChange}
                handleSubmit={this._handleSubmit}
                handleFacebookLogin={this._handleFacebookLogin}
                usernameValue={username} 
                passwordValue={password} 
            />
        );
    };
    _handleInputChange = event => {
        const { target: { value, name } } = event; // value = event.target.value, name = event.target.name
        this.setState({
            [name]: value // name은 username, password이기 때문에 [name]로 표기하여 중복을 방지한다. 
        });
    };
    _handleSubmit = event => {
        const { usernameLogin } = this.props;
        const { username, password } = this.state;

        event.preventDefault();
        usernameLogin(username, password);
    }
    _handleFacebookLogin = response => {
        const { facebookLogin } = this.props;
        
        facebookLogin(response.accessToken)
    }
}

export default Container;