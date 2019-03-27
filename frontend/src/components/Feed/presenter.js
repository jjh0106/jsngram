import React from 'react';
import propTypes from 'prop-types';
import Loading from 'components/Loading';
import styles from './styles.module.scss';
import FeedPhoto from 'components/FeedPhoto';

const Feed = props => {
    if( props.loading ){
        return <LoadingFeed />;
    } else if( props.feed ) {
        return <RenderFeed {...props} />;
    }
}

const LoadingFeed = props => (
    <div className={styles.feed}>
        <Loading />
    </div>
);

const RenderFeed = props => (
    <div className={styles.feed}>
        {props.feed.map(photo => <FeedPhoto {...photo} key={photo.id} /> )}
    </div>
);

Feed.propTypes = {
    loading: propTypes.bool.isRequired,
    feed: propTypes.array
}

export default Feed;