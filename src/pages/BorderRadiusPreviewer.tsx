import { CSSProperties, useRef, useState } from 'react'

import styles from '../styles/pages/BorderRadiusPreviewer.module.scss';

function BorderRadiusPreviewer() {
    const [leftAxis, setLeftAxis] = useState('0');
    const [rightAxis, setRightAxis] = useState('0');
    const [topAxis, setTopAxis] = useState('0');
    const [bottomAxis, setBottomAxis] = useState('0');
    const [isCopied, setIsCopied] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    var cssVar: CSSProperties = {
        borderRadius: `${topAxis}% ${rightAxis}% ${bottomAxis}% ${leftAxis}%`
    }

    function copyInput(){
        const value = inputRef.current?.value;

        navigator.clipboard.writeText(value!);

        setIsCopied(true)

        setTimeout(() => setIsCopied(false), 2000)
    }

    return (
        <div className={styles.borderRadiusPreviewerContainer}>
            <section className={styles.boxContainer}>
                <input type="range" defaultValue={'0'} className={styles.axis} onChange={(e) => setTopAxis(e.target.value)} />
                <input type="range" defaultValue={'0'} className={styles.axis} onChange={(e) => setRightAxis(e.target.value)} />
                <input type="range" defaultValue={'0'} className={styles.axis} onChange={(e) => setBottomAxis(e.target.value)} />
                <input type="range" defaultValue={'0'} className={styles.axis} onChange={(e) => setLeftAxis(e.target.value)} />
                <div style={cssVar}></div>
            </section>

            <section className={styles.copyContainer}>
                <input ref={inputRef} disabled type="text" value={`border-radius: ${topAxis}% ${rightAxis}% ${bottomAxis}% ${leftAxis}%`} />
                <button type='button' onClick={copyInput}>{isCopied ? 'Copiado' : 'Copiar'}</button>
            </section>
        </div>
    );
}

export default BorderRadiusPreviewer;