import React from 'react';
import propTypes from 'prop-types';
import Textarea from 'react-textarea-autosize';
import styles from './styles.module.scss';

const CommentBox = (props, context) => (
    <form className={styles.commentBox}>
        <Textarea
            className={styles.input} 
            placeholder={context.t('Add a comment...')} 
        />
    </form>
);

CommentBox.contextTypes = {
    t: propTypes.func.isRequired
};

export default CommentBox;