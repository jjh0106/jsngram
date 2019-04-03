import React from 'react';
import propTypes from 'prop-types';
import styles from './styles.module.scss';

const UserRow = (props, context) => {
    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <img
                    src={props.profile_image || require("images/noPhoto.jpg")}
                    alt={props.user.username}
                    className={props.big ? styles.bigAvatar : styles.avatar}
                />
                <div className={styles.user}>
                    <span className={styles.username}>{props.user.username}</span>
                    <span className={styles.name}>{props.user.name}</span>
                </div>
            </div>
            <span className={styles.column}>
                <button className={styles.button} onClick={props.handleClick}>
                    {props.user.following ? context.t("Unfollow") : context.t("Follow")}
                </button>
            </span>
        </div>
    )
};

UserRow.contextTypes = {
    t: propTypes.func.isRequired
  };
  
UserRow.propTypes = {
    user: propTypes.shape({
        id: propTypes.number.isRequired,
        profile_image: propTypes.string,
        username: propTypes.string.isRequired,
        name: propTypes.string,
        following: propTypes.bool.isRequired,
    }).isRequired,
    big: propTypes.bool,
    handleClick: propTypes.func.isRequired,
};
  
  UserRow.defaultProps = {
    big: false
  };

export default UserRow;