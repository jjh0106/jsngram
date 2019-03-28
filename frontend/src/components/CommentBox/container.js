import React, { Component } from 'react';
import propTypes from 'prop-types';
import CommentBox from './presenter';

class Container extends Component {
    state = {
        comment: '',
    };
    static propTypes = {
        photoId: propTypes.number.isRequired
    };
    render(){
        return (
            <CommentBox 
                handleInputChange={this._handleInputChange} 
                handleKeyPress={this._handleKeyPress} 
                {...this.props}
                {...this.state} 
            />
        )
    };
    _handleInputChange = event => {
        const { target: { value } } = event;
        this.setState({
            comment: value
        })
    };
    _handleKeyPress = event => {
        const { submitComment } = this.props;
        const { comment } = this.state;
        const { key } = event;
        if (key === 'Enter') {
            event.preventDefault();
            submitComment(comment);
            this.setState({ 
                comment: '' 
            });
        }
    };
};

export default Container;