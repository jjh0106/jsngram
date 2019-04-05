import React from 'react';
import propTyeps from 'prop-types';
import Loading from 'components/Loading';
import UserRow from 'components/UserRow';
import styles from './styles.module.scss';

const Explore = props => {
    if(props.loading){
        return <LoadingExplore />
    } else if(props.userList) {
        return <RenderExplore {...props} />
    }
};

const LoadingExplore = props => (
    <div className={styles.explore}>
        <Loading />
    </div>
);

const RenderExplore = props => (
    <div className={styles.explore}>
        {props.userList.map(user => (
            <UserRow 
                big={true} 
                horizontal={true} 
                user={user} 
                key={user.id} 
            /> 
        ))}
    </div>
);

Explore.propTyeps = {
    loading: propTyeps.bool.isRequired,
}

export default Explore;