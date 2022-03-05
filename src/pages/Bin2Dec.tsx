import React, { FormEvent, useState } from 'react';

import styles from '../styles/pages/Bin2Dec.module.scss';

function Bin2Dec() {

    const [binInput, setBinInput] = useState("");
    const [decInput, setDecInput] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");
    const [isInputMaxLength, setIsInputMaxLength] = useState(false);

    function onChangeTagInput(e: any) {
        setBinInput(e.target.value.replace(/[^0-1]/g, ""));
        if (e.target.value.length === 8) {
            setIsInputMaxLength(true);
        } else {
            setIsInputMaxLength(false);
        }
    }

    function keyCheck(e: any) {
        if (e !== '0' && e !== '1' && e !== 'Backspace') {
            setErrorMessage("Somente 0 e 1")
        } else {
            setErrorMessage("")
            if (isInputMaxLength) {
                setErrorMessage("Máximo de 8 números")
            }
        }
    }

    function convertBin2Dec(e: FormEvent) {
        e.preventDefault();
        setIsInputMaxLength(false);
        setDecInput(parseInt(binInput, 2))
    }

    return (
        <form className={styles.bin2DecContainer} onSubmit={convertBin2Dec}>
            <div className={styles.inputGroup}>
                <input type="text" maxLength={8} value={binInput} onKeyDown={(e) => keyCheck(e.key)} onChange={(e) => onChangeTagInput(e)} />
                <span>to</span>
                <input type="text" disabled value={decInput} />
            </div>
            <span className={styles.errorMessage}>{errorMessage}</span>
            <button type='submit'>Confirmar</button>
        </form>
    );
}

export default Bin2Dec;