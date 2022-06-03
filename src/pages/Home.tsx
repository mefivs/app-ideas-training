import React from 'react';
import AppSelector from '../components/AppSelector';

import styles from '../styles/pages/Home.module.scss';

// 35 itens

function Home() {

    return (
        <div className={styles.homeContainer}>
            <AppSelector stepLink='/bin2dec' stepNumber={'01'} stepLabel={'Bin2Dec'}/>
            <AppSelector stepLink='/border-radius-previewer' stepNumber={'02'} stepLabel={'Border-Radius Previewer'}/>
        </div>
    );
}

export default Home;