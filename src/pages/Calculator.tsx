import { useState } from 'react';
import styles from '../styles/pages/Calculator.module.scss';

export function Calculator() {
    const padButtons = [['1', '2', '3', '/'], ['4', '5', '6', '-'], ['7', '8', '9', '+'], ['AC', '0', 'C', '=']]
    const [num1, setNum1] = useState<null | string>(null);
    const [num2, setNum2] = useState<null | string>(null);
    const [operation, setOperation] = useState<null | '-' | '+' | '/' | '*'>(null)
    const [result, setResult] = useState<null | number>(null);
    const [lastResult, setLastResult] = useState<null | number>(null);

    const padFunctions = {
        '0': () => addNumber('0'),
        '1': () => addNumber('1'),
        '2': () => addNumber('2'),
        '3': () => addNumber('3'),
        '4': () => addNumber('4'),
        '5': () => addNumber('5'),
        '6': () => addNumber('6'),
        '7': () => addNumber('7'),
        '8': () => addNumber('8'),
        '9': () => addNumber('9'),
        '+': () => defineOperation('+'),
        '-': () => defineOperation('-'),
        '/': () => defineOperation('/'),
        '*': () => defineOperation('*'),
        'AC': () => clearAll(),
        'C': () => clear(),
        '=': () => calculate()
    }

    function calculate() {
        if (result !== null) {
            setLastResult(result)
        }
        if (num1 && num2) {
            if (operation === '+') {
                setResult(Number(num1) + Number(num2))
            } else if (operation === '-') {
                setResult(Number(num1) - Number(num2))
            } else if (operation === '/') {
                setResult(Number(num1) / Number(num2))
            } else if (operation === '*') {
                setResult(Number(num1) * Number(num2))
            }

            setNum1(null)
            setNum2(null)
            setOperation(null)
        }
    }

    function clear() {
        if (num2) {
            setNum2(null)
        } else if (operation) {
            setOperation(null)
        } else {
            setNum1(null)
        }
    }

    function clearAll() {
        setNum1(null)
        setNum2(null)
        setOperation(null)
        setLastResult(null)
        setResult(null)
    }

    function defineOperation(op: '-' | '+' | '/' | '*') {
        if (num1) {
            setOperation(op);
        } else if (result !== null && result.toString().length < 8) {
            setNum1(result.toString())
            setLastResult(result)
            setResult(null)
            setOperation(op)
        } else if (num1 === null) {
            setNum1('-');
        }
    }

    function addNumber(number: string) {
        if (result !== null) {
            setLastResult(result)
            setResult(null)
        }
        if (!operation) {
            if (!num1) {
                setNum1(number);
            } else {
                if (num1.length < 8) {
                    setNum1(num1.concat(number))
                }
            }
        } else {
            if (!num2) {
                setNum2(number);
            } else {
                if (num2.length < 8) {
                    setNum2(num2.concat(number))
                }
            }
        }
    }

    function handleDisplay(pad: string) {
        padFunctions[pad as keyof typeof padFunctions]();
    }

    return (
        <div className={styles.calculatorContainer}>

            <section className={styles.calculator}>
                <div className={styles.display}>
                    {lastResult !== null &&
                        <span>Último resultado: {lastResult.toString().length < 8 ? lastResult : 'Erro'}</span>
                    }
                    <div>
                        {result !== null ?
                            <>
                                {result.toString().length < 8 ?
                                    <span> = {result.toString()}</span>
                                    :
                                    <span>Erro</span>
                                }
                            </>
                            :
                            <>
                                {num1 &&
                                    <span>{num1}</span>
                                }
                                {operation &&
                                    <span>{operation}</span>
                                }
                                {num2 &&
                                    <span>{num2}</span>
                                }
                            </>
                        }
                    </div>
                </div>

                <div className={styles.pad}>
                    {padButtons.map((pad) => {
                        return (
                            pad.map((number) => {
                                return (
                                    <button key={number} type='button' onClick={() => handleDisplay(number)}>{number}</button>
                                )
                            })
                        )

                    })}
                </div>
            </section>
        </div>
    );
}