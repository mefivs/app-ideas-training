import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from '../styles/components/BackButton.module.scss'


function BackButton() {

    const currentLocation = useLocation();

    return (
        <Link to='/' style={currentLocation.pathname === '/' ? { display: 'none' } : { display: 'initial' }} className={styles.backButton}>
            Back
        </Link>
    );
}

export default BackButton;