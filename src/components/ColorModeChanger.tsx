import styles from '../styles/components/ColorModeChanger.module.scss';

import { Moon, Sun } from 'phosphor-react';
import { useState } from 'react';



function ColorModeChanger() {
    const [mode, setMode] = useState<'Dark' | 'Light'>('Dark');

    function modeSwitch() {
        if (mode === 'Dark') {
            setMode('Light');
            document.documentElement.style.setProperty('--foreground-color', '#0f0f0f');
            document.documentElement.style.setProperty('--background-color', '#FFF');
            document.documentElement.style.setProperty('--text-color', '#353535');
            document.documentElement.style.setProperty('--border-color', '#d1d1d1');
        } else {
            setMode('Dark');
            document.documentElement.style.setProperty('--foreground-color', '#FFF');
            document.documentElement.style.setProperty('--background-color', '#0f0f0f');
            document.documentElement.style.setProperty('--text-color', '#d1d1d1');
            document.documentElement.style.setProperty('--border-color', '#353535');
        }
    }

    return (
        <button type='button' onClick={modeSwitch} className={styles.colorModeButton}>
            {mode === 'Light' ? <Moon weight='bold' /> : <Sun weight='bold' />}
        </button>
    )
}

export default ColorModeChanger;