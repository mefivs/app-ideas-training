import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/components/AppSelector.module.scss';

interface AppSelectorProps {
    stepNumber: string;
    stepLabel: string;
    stepLink: string;
}

function AppSelector(props: AppSelectorProps) {
    return (
        <Link to={props.stepLink} className={styles.appSelector}>
            <span>
                {props.stepNumber}
            </span>
            <span>
                {props.stepLabel}
            </span>
        </Link>
    );
}

export default AppSelector;