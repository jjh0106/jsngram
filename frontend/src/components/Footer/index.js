import React from "react";
import propTypes from 'prop-types';
import styles from "./styles.module.scss";

const Footer = (props, context) => (
    <footer className={styles.footer}>
        <div className={styles.column}>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>{context.t('About Us')}</li>
                    <li className={styles.listItem}>{context.t('Support')}</li>
                    <li className={styles.listItem}>{context.t('Blog')}</li>
                    <li className={styles.listItem}>{context.t('Press')}</li>
                    <li className={styles.listItem}>{context.t('API')}</li>
                    <li className={styles.listItem}>{context.t('Jobs')}</li>
                    <li className={styles.listItem}>{context.t('Privacy')}</li>
                    <li className={styles.listItem}>{context.t('Terms')}</li>
                    <li className={styles.listItem}>{context.t('Directory')}</li>
                    <li className={styles.listItem}>{context.t('Language')}</li>
                </ul>
            </nav>
        </div>
        <div className={styles.column}>
            <span className={styles.copyright}>&copy; 2019 JSNGRAM</span>
        </div>
    </footer>
);

Footer.contextTypes = {
    t: propTypes.func.isRequired
}

export default Footer;