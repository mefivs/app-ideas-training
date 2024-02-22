import { Link, useLocation } from 'react-router-dom';
import {Backspace} from 'phosphor-react';

import styles from '../styles/components/BackButton.module.scss'


export function BackButton() {

    const currentLocation = useLocation();

    return (
        <Link to='/' style={currentLocation.pathname === '/' ? { display: 'none' } : { display: 'flex' }} className={styles.backButton}>
           <Backspace weight='fill' /> Back
        </Link>
    );
}