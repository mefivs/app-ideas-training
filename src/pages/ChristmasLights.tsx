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
                        <Row key={row} isTheLightsOn={isTheLightsOn} index={key} removeRow={removeRow} rowsQuantity={rows.length} />
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
    rowsQuantity: number,
    removeRow: (index: number) => void;
}

function Row({ isTheLightsOn, index, removeRow, rowsQuantity }: RowProps) {

    return (
        <div>
            <Light isTheLightsOn={isTheLightsOn} />
            <Light isTheLightsOn={isTheLightsOn} />
            <Light isTheLightsOn={isTheLightsOn} />
            <Light isTheLightsOn={isTheLightsOn} />
            <Light isTheLightsOn={isTheLightsOn} />
            <Light isTheLightsOn={isTheLightsOn} />
            <Light isTheLightsOn={isTheLightsOn} />
            {rowsQuantity > 1 &&
                <button type='button' onClick={() => removeRow(index)}><MinusCircle /></button>
            }
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
    const [intensity, setIntensity] = useState(50);
    const [maxIntensity, setMaxIntensity] = useState(50);

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
            <span onClick={toggleControlSection} style={
                {
                    backgroundColor: `${!isTheLightsOn ? 'var(--border-color' : selectedColor}`
                    , boxShadow: `${isTheLightsOn ? `0px 1px 10px 1px ${selectedColor}` : 'none'}`
                }
            }>
            </span>
            {isControlOpened &&
                <section className={styles.lightIndividualControl} ref={lightIndividualControlRef}>

                    <div className={styles.inputGroup}>
                        <label htmlFor="">Cor:</label>
                        <input id="colorpicker" type="color" value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} />
                        <label htmlFor="colorpicker" style={{ backgroundColor: selectedColor }}>
                            <p style={{ color: selectedColor }}>{selectedColor !== 'var(--primary)' ? selectedColor : 'Escolha uma cor...'}</p>
                        </label>
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="">Intensidade máxima:</label>
                        <div className={styles.rangeAux}>
                            <input type="range" min={0} max={100} defaultValue={50} onChange={(e) => setMaxIntensity(Number(e.target.value))} />
                            <p>{maxIntensity}%</p>
                        </div>
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="">Tamanho</label>
                        <input type="range" />
                    </div>

                </section>
            }
        </div>
    )
}