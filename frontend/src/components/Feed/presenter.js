import React from 'react';
import propTypes from 'prop-types';
import Loading from 'components/Loading';
import styles from './styles.module.scss';

const Feed = props => {
    if( props.loading ){
        return <LoadingFeed />;
    } else {

    }
}

const LoadingFeed = props => (
    <div className={styles.feed}>
        <Loading />
    </div>
)

Feed.propTypes = {
    loading: propTypes.bool.isRequired,
}

export default Feed;