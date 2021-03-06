import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IosCompassOutline from 'react-ionicons/lib/IosCompassOutline';
import IosHeartOutline from 'react-ionicons/lib/IosHeartOutline';
import IosPersonOutline from 'react-ionicons/lib/IosPersonOutline';
import styles from './styles.module.scss';

const Navigation = (props, context) => (
    <div className={styles.navigation}>
        <div className={styles.inner}>
            <div className={styles.column}>
                <Link to="/">
                    <img
                        src={require("images/logo.png")}
                        className={styles.logo}
                        alt={context.t("Logo")}
                    />
                </Link>
            </div>
            <div className={styles.column}>
                <form onSubmit={props.onSubmit}>
                    <input 
                        type="text" 
                        placeholder={context.t('search')} 
                        className={styles.searchInput} 
                        onChange={props.onInputChange}
                        value={props.value}
                    />
                </form>
            </div>
            <div className={styles.column}>
                <div className={styles.navIcon}>
                    <Link to="/explore">
                        <IosCompassOutline fontSize="30px" color="black" />
                    </Link>
                </div>
                <div className={styles.navIcon}>
                    <IosHeartOutline fontSize="30px" color="black" />
                </div>
                <div className={styles.navIcon}>
                    <Link to="/profile">
                        <IosPersonOutline fontSize="30px" color="black" />
                    </Link>
                </div>
                <div className={styles.navIcon}>
                    <button type="button" onClick={props.handleLogout}>logout</button>
                </div>
            </div>
        </div>
    </div>
)

Navigation.contextTypes = {
    t: propTypes.func.isRequired
}

Navigation.propTypes = {
    onSubmit: propTypes.func.isRequired,
    onInputChange: propTypes.func.isRequired,
    value: propTypes.string.isRequired,
}

export default Navigation;