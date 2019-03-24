import React, { Component } from 'react';
import propTypes from 'prop-types';
import Feed from './presenter';

class Container extends Component {
    state = {
        loading: true,
    };

    static propTypes = {
        getFeed: propTypes.func.isRequired,
    };

    componentDidMount() {
        const { getFeed } = this.props;
        getFeed();
    };

    render(){
        return <Feed {...this.state} />
    };
}

export default Container;