import React from 'react';
import propTypes from 'prop-types';
import styles from './styles.modules.scss';
import Loading from 'components/Loading';

const Explore = props => {
    if(props.loading){
        return <LoadingExplore />;
    } 
};

const LoadingExplore = props => (
    <div className={styles.search}>
        <Loading />
    </div>
);

Explore.propTypes = {
    loading: propTypes.bool.isRequired,
}

export default Explore;