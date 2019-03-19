import React, { Component } from 'react';
import LoginForm from './presenter';

class Container extends Component {
    state = {
        username: '',
        password: '',
    };
    render(){
        const { username, password } = this.state;
        return (
            <LoginForm 
                handleInputChange={this._handleInputChange}
                handleSubmit={this._handleSubmit}
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
        event.preventDefault();
        // redux action will be here;
    }
}

export default Container;