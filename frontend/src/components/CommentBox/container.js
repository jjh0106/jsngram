import React, { Component } from 'react';
import propTypes from 'prop-types';
import CommentBox from './presenter';

class Container extends Component {
    static propTypes = {
        photoId: propTypes.number.isRequired
    };
    render(){
        return (
            <CommentBox {...this.state} />
        )
    }
};

export default Container;