import React from 'react';
import propTypes from 'prop-types';
import Loading from 'components/Loading';
import MdClose from 'react-ionicons/lib/MdClose';
import UserRow from 'components/UserRow';
import styles from './styles.module.scss';

const UserList = props => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <header className={styles.header}>
                    <h4 className={styles.title}>{props.title}</h4>
                    <span onClick={props.closeLikes}>
                        <MdClose fontSize="20px" color="black" />
                    </span>
                </header>
                <div className={styles.content}>
                    {props.loading ? <Loading /> : <RenderUsers list={props.userList} />}
                </div>
            </div>
        </div>
    )
};

const RenderUsers = props => props.list.map(user => <UserRow user={user} key={user.id} />);

RenderUsers.propTypes = {
    list: propTypes.array
};

UserList.propTypes = {
    title: propTypes.string.isRequired,
    loading: propTypes.bool.isRequired,
    closeLikes: propTypes.func.isRequired,
    userList: propTypes.array,
    // users: propTypes.array,
};

export default UserList;