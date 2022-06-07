import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {Backspace} from 'phosphor-react';

import styles from '../styles/components/BackButton.module.scss'


function BackButton() {

    const currentLocation = useLocation();

    return (
        <Link to='/' style={currentLocation.pathname === '/' ? { display: 'none' } : { display: 'flex' }} className={styles.backButton}>
           <Backspace /> Back
        </Link>
    );
}

export default BackButton;