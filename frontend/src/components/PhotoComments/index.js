import React from 'react';
import propTypes from 'prop-types';
import styles from './styles.module.scss';

const PhotoComments = props => (
    <div className={styles.comments}>
        <ul className={styles.list}>
            <Comment username={props.creator} comment={props.caption} />
            {props.comments.map(comment => (
                <Comment 
                    username={comment.creator.username} 
                    comment={comment.message} 
                    key={comment.id} 
                />
            ))}
        </ul>
    </div>
);

const Comment = props => (
    <li className={styles.comment}>
        <span className={styles.username}>{props.username}</span>
        <span className={styles.message}>{props.comment}</span>
    </li>
)

PhotoComments.propTypes = {
    caption: propTypes.string.isRequired,
    creator: propTypes.string.isRequired,
    comments: propTypes.arrayOf(
        propTypes.shape({
            message: propTypes.string.isRequired,
            creator: propTypes.shape({
                profile_image: propTypes.string,
                username: propTypes.string.isRequired,
            }).isRequired,
        })
    ).isRequired,
};

export default PhotoComments;
