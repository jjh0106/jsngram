import React from 'react';
import propTypes from 'prop-types';
import styles from './styles.module.scss';
import IosHeart from 'react-ionicons/lib/IosHeart';
import IosHeartOutline from 'react-ionicons/lib/IosHeartOutline';
import IosTextOutline from 'react-ionicons/lib/IosTextOutline';

const PhotoActions = (props, context) => (
    <div className={styles.actions}>
        <div className={styles.icons}>
            <span className={styles.icon} onClick={props.handleHeartClick}>
            { props.isLiked ? (<IosHeart fontSize="28px" color="#EB4B59" />) : (<IosHeartOutline fontSize="28px" color="black" />) }
            </span>
            <span className={styles.icon}>
                <IosTextOutline fontSize="28px" color="black" />
            </span>
        </div>
        <span className={styles.likes}>
            {props.number} {props.number === 1 ? context.t('like') : context.t('likes')}
        </span>
    </div>
);

PhotoActions.contextTypes = {
    t: propTypes.func.isRequired,
};

PhotoActions.propTypes = {
    number: propTypes.number.isRequired,
    isLiked: propTypes.bool.isRequired,
    photoId: propTypes.number.isRequired,
    handleHeartClick: propTypes.func.isRequired
};

export default PhotoActions;