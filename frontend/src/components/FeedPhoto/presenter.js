import React from 'react';
import propTypes from 'prop-types';
import styles from './styles.module.scss';
import PhotoActions from 'components/PhotoActions';
import PhotoComments from 'components/PhotoComments';
import TimeStamp from 'components/TimeStamp';
import CommentBox from 'components/CommentBox';
import UserList from 'components/UserList';

const FeedPhoto = (props, context) => {
    return (
        <div className={styles.feedPhoto}>
            <header className={styles.header}>
                <img 
                src={props.creator.profile_image || require('images/noPhoto.jpg')} 
                alt={props.creator.username} 
                className={styles.image}
                />
                <div className={styles.headerColumn}>
                    <span className={styles.creator}>{props.creator.username}</span>
                    <span className={styles.location}>{props.location}</span>
                </div>
            </header>
            <img src={props.file} alt={props.caption} />
            <div className={styles.meta}>
                <PhotoActions 
                    number={props.like_count} 
                    isLiked={props.is_liked} 
                    photoId={props.id} 
                    openLikes={props.openLikes}
                />
                <PhotoComments 
                    caption={props.caption}
                    creator={props.creator.username}
                    comments={props.comments}
                />
                <TimeStamp time={props.natural_time} />
                <CommentBox photoId={props.id} />
            </div>
            {props.seeingLikes &&
                 <UserList 
                    title={context.t('Likes')} 
                    closeLikes={props.closeLikes} 
                    openLikes={props.openLikes} 
                    userList={props.likes}
                />
            }
        </div>
    );
};

FeedPhoto.contextTypes = {
    t: propTypes.func.isRequired
}

FeedPhoto.propTypes = {
    id: propTypes.number.isRequired,
    creator: propTypes.shape({
        profile_image: propTypes.string,
        username: propTypes.string.isRequired,
    }).isRequired,
    location: propTypes.string.isRequired,
    file: propTypes.string.isRequired,
    like_count: propTypes.number.isRequired,
    caption: propTypes.string.isRequired,
    comments: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            message: propTypes.string.isRequired,
            creator: propTypes.shape({
                profile_image: propTypes.string,
                username: propTypes.string.isRequired,
            }).isRequired,
        })
    ).isRequired,
    natural_time: propTypes.string.isRequired,
    is_liked: propTypes.bool.isRequired,
    seeingLikes: propTypes.bool.isRequired,
    closeLikes: propTypes.func.isRequired,
    openLikes: propTypes.func.isRequired,
    likes: propTypes.arrayOf(
        propTypes.shape({
          profile_image: propTypes.string,
          username: propTypes.string.isRequired,
          name: propTypes.string
        }).isRequired
      )
};

export default FeedPhoto;