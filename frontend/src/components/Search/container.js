import React, { Component } from 'react';
import propTypes from 'prop-types';
import Explore from './presenter';

class Container extends Component {
    state = {
        loading: true
    }
    static propTypes = {
        searchByTerm: propTypes.func.isRequired,
        userList: propTypes.array,
        imageList: propTypes.array,
    }
    componentDidMount = () => {
        const { searchByTerm } = this.props;
        searchByTerm();
    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.userList && nextProps.imageList){
            this.setState({ 
                loading: false 
            });
        }
    }

    render(){
        const { userList, imageList } = this.props;
        return <Explore {...this.state} userList={userList} imageList={imageList} />
    }
}

export default Container;