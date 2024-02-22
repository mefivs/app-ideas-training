import { MinusCircle, PlusCircle } from 'phosphor-react';
import styles from '../styles/pages/ChristmasLights.module.scss';
import { useEffect, useRef, useState } from 'react';

export function ChristmasLights() {

    const [isTheLightsOn, setIsTheLightsOn] = useState(false);
    const [rows, setRows] = useState([1]);

    function toggleLights() {
        setIsTheLightsOn(!isTheLightsOn);
    }

    function addRow() {
        setRows([...rows, rows[rows.length - 1] + 1]);
    }

    function removeRow(index: number) {
        var currentRow = [...rows];
        currentRow.splice(index, 1)
        setRows(currentRow)
    }

    return (
        <div className={styles.christmasLightsContainer}>
            <section className={styles.christmasLights}>

                {rows.map((row, key) => {
                    return (
                        <Row key={row} isTheLightsOn={isTheLightsOn} index={key} removeRow={removeRow} />
                    )
                })}

                {rows.length < 7 &&
                    <button type='button' onClick={addRow}><PlusCircle /></button>
                }
            </section>

            <section className={styles.controls}>
                <button type='button' className={`${isTheLightsOn && styles.active}`} onClick={toggleLights}>{isTheLightsOn ? 'ON' : 'OFF'}</button>
            </section>
        </div>
    )
}

interface RowProps {
    isTheLightsOn: boolean,
    index: number,
    removeRow: (index: number) => void;
}

function Row({ isTheLightsOn, index, removeRow }: RowProps) {

    return (
        <div>
            <Light isTheLightsOn={isTheLightsOn} />
            <Light isTheLightsOn={isTheLightsOn} />
            <Light isTheLightsOn={isTheLightsOn} />
            <Light isTheLightsOn={isTheLightsOn} />
            <Light isTheLightsOn={isTheLightsOn} />
            <Light isTheLightsOn={isTheLightsOn} />
            <Light isTheLightsOn={isTheLightsOn} />
            <button type='button' onClick={() => removeRow(index)}><MinusCircle /></button>
        </div>
    )
}

interface LightProps {
    isTheLightsOn: boolean,

}

function Light({ isTheLightsOn }: LightProps) {

    const [isControlOpened, setIsControlOpened] = useState(false);
    const [selectedColor, setSelectedColor] = useState('var(--primary)');
    const lightIndividualControlRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.addEventListener("mousedown", handleOutsideClick);
        }
    }, [])


    function handleOutsideClick(e: MouseEvent) {
        if (lightIndividualControlRef.current && !lightIndividualControlRef.current.contains(e.target as Node)) {
            setIsControlOpened(false)
        }
    }

    function toggleControlSection() {
        setIsControlOpened(!isControlOpened);
    }

    return (
        <div className={styles.light}>
            <span onClick={toggleControlSection} style={{ backgroundColor: `${!isTheLightsOn ? 'var(--border-color' : selectedColor}` }}></span>
            {isControlOpened &&
                <section className={styles.lightIndividualControl} ref={lightIndividualControlRef}>

                    <div className={styles.inputGroup}>
                        <label htmlFor="">Cor:</label>
                        <input id="colorpicker" type="color" value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} />
                        <label htmlFor="colorpicker" style={{ backgroundColor: selectedColor }}>
                            <p style={{ color: selectedColor }}>{selectedColor}</p>
                        </label>
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="">Intensidade máxima:</label>
                        <input type="number" />
                    </div>

                </section>
            }
        </div>
    )
}