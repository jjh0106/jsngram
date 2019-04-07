import React, { Component } from 'react';
import propTypes from 'prop-types';
import Navigation from './presenter';

class Container extends Component {
    state = {
        term: ''
    }
    static propTypes = {
        goToSearch: propTypes.func.isRequired,
    }
    render(){
        return (
            <Navigation 
                value={this.state.term} 
                onInputChange={this._onInputChange} 
                onSubmit={this._onSubmit} 
            />
        )
    }
    _onInputChange = event => {
        const { target: { value } } = event;
        this.setState({
            term: value
        })
    };
    _onSubmit = event => {
        const { term } = this.state;
        const { goToSearch } = this.props;
        event.preventDefault();
        goToSearch(term);
        this.setState({
            term: '',
        })
    }
}

export default Container;