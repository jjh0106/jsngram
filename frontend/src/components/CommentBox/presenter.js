import React from 'react';
import propTypes from 'prop-types';
import Textarea from 'react-textarea-autosize';
import styles from './styles.module.scss';

const CommentBox = (props, context) => (
    <form className={styles.commentBox}>
        <Textarea
            className={styles.input} 
            placeholder={context.t('Add a comment...')} 
            onChange={props.handleInputChange}
            onKeyPress={props.handleKeyPress}
            value={props.comment}
        />
    </form>
);

CommentBox.contextTypes = {
    t: propTypes.func.isRequired
};

CommentBox.propTypes = {
    handleInputChange: propTypes.func.isRequired,
    handleKeyPress: propTypes.func.isRequired,
    comment: propTypes.string.isRequired,
    photoId: propTypes.number.isRequired,
}

export default CommentBox;