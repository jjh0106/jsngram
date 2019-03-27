import React from 'react';
import propTypes from 'prop-types';
import styles from './styles.module.scss';

const TimeStamp = (props, context) => (
    <span className={styles.time}>{props.time}</span>
);

TimeStamp.propTypes = {
    time: propTypes.string.isRequired
};

export default TimeStamp;