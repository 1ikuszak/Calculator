import React from 'react'
import { useEffect, useState } from 'react'
import Calculator from './calculator'
import './App.css'

const App = () => {

    const [calc, setCalc] = useState('0')
    const [firstOperand, setFirstOperand] = useState(0)
    const [operator, setOperator] = useState('')
    const [secondOperand, setSecondOperand] = useState(0)
    const [memoryNumber, setMemoryNumber] = useState('')

    const operators = ['+', '-', 'x', '÷', '√', '%']
    const actions = ['C/CE', 'MRC', 'M-', 'M+', 'OFF', '=']


    useEffect(() => {
        console.log("first: " + firstOperand)
    }, [firstOperand])
    
    useEffect(() => {
        console.log("second: " + secondOperand)
    }, [secondOperand])

    useEffect(() => {
        console.log("operator: " + operator)
    }, [operator])


    function reset() {
        setFirstOperand(0)
        setOperator('')
        setSecondOperand(0)
    }

    function compute(first_number, second_number, operator) {
        switch(operator) {
            case '+':
                return first_number + second_number
            case '-':
                return first_number - second_number
            case 'x':
                return first_number * second_number
            case '÷':
                return first_number / second_number
            case '√':
                return Math.sqrt(first_number)
            case '%':
                return first_number / 100
            default:
                return 0
        }
    }


    const updateDisplay = (value) => {
        if (value === 'C') {
            setCalc('0')
            reset()
            return
        }
      
        if (value === 'CE') {
            setSecondOperand(0)
            setCalc(0)
            return
        }

        // memory
        if (value === 'M+') {
            setMemoryNumber(calc)
            reset()
            setCalc(0)
            document.getElementsByClassName('memory')[0].classList.add('active')
            return
        }
        if (value === 'M-') {
            setMemoryNumber('')
            reset()
            setCalc(0)
            document.getElementsByClassName('memory')[0].classList.remove('active')
            return
        }
        if (value === 'MRC') {
            if(operator === '') {
                setFirstOperand(memoryNumber)
                setCalc(memoryNumber)
            }
            else {
                setSecondOperand(memoryNumber)
                setCalc(memoryNumber)
            }
            return
        }
      
        if(value === '%') {
            console.log(calc)
            let result = compute(calc, secondOperand, '%')
            reset()
            setFirstOperand(result)
            setCalc(result)
            return
        }

        if(value === '√') {
            console.log(calc)
            let result = compute(calc, secondOperand, '√')
            reset()
            setFirstOperand(result)
            setCalc(result)
            return
        }
      
        // compute
        if (value === '=') {
          if (firstOperand !== '' && secondOperand !== '') {
            let result = compute(firstOperand, secondOperand, operator)
            setCalc(result)
            reset()
            setFirstOperand(result)
            return
          }
        }
      
        // get operator
        if (operators.includes(value) && operator === '') {
            setOperator(value)
            return
        }
      
        // get number 1
        if (!operators.includes(value) && operator === '') {
            if(firstOperand === 0) {
                setFirstOperand(value)
                setCalc(value)
            }
            else if (firstOperand.toString().length < 6) {
                setFirstOperand(firstOperand + value)
                setCalc(firstOperand + value)
            }
        return
        }
      
        // get number 2
        if (!operators.includes(value) && firstOperand !== 0 && operator !== '') {
            if(secondOperand === 0) {
                setSecondOperand(value)
                setCalc(value)
            }
            else if (secondOperand.toString().length < 6) {
                setSecondOperand(secondOperand + value)
                setCalc(secondOperand + value)
            }
            return
        }
      }
      


    return (
        <div className='app'>
            <div className="calculator">
                <div className="calculator__display">
                    <span className='memory'>M</span>
                    <input disabled="true" maxLength="10" value={calc}></input>
                </div>

                <div className="calculator__buttons">
                    <div className="column">
                        <button onClick={() => updateDisplay('C')} className="calculator__button accent">C</button>
                        <button onClick={() => updateDisplay('MRC')} className="calculator__button accent2">MRC</button>
                        <button onClick={() => updateDisplay('7')} className="calculator__button number">7</button>
                        <button onClick={() => updateDisplay('4')} className="calculator__button number">4</button>
                        <button onClick={() => updateDisplay('1')} className="calculator__button number">1</button>
                        <button onClick={() => updateDisplay('0')} className="calculator__button number">0</button>
                    </div>
                    <div className="column">
                        <button onClick={() => updateDisplay('CE')} className="calculator__button accent">CE</button>
                        <button onClick={() => updateDisplay('M-')} className="calculator__button accent2">M-</button>
                        <button onClick={() => updateDisplay('8')} className="calculator__button number">8</button>
                        <button onClick={() => updateDisplay('5')} className="calculator__button number">5</button>
                        <button onClick={() => updateDisplay('2')} className="calculator__button number">2</button>
                        <button onClick={() => updateDisplay('.')} className="calculator__button">.</button>
                    </div>
                    <div className="column">
                        <button onClick={() => updateDisplay('√')} className="calculator__button accent">√</button>
                        <button onClick={() => updateDisplay('M+')} className="calculator__button accent2">M+</button>
                        <button onClick={() => updateDisplay('9')} className="calculator__button number">9</button>
                        <button onClick={() => updateDisplay('6')} className="calculator__button number">6</button>
                        <button onClick={() => updateDisplay('3')} className="calculator__button number">3</button>
                        <button onClick={() => updateDisplay('=')} className="calculator__button accent">=</button>
                    </div>
                    <div className="column">
                        <button onClick={() => updateDisplay('%')} className="calculator__button accent">%</button>
                        <button onClick={() => updateDisplay('÷')} className="calculator__button accent">÷</button>
                        <button onClick={() => updateDisplay('x')} className="calculator__button accent">x</button>
                        <button onClick={() => updateDisplay('-')} className="calculator__button accent">-</button>
                        <button onClick={() => updateDisplay('+')} className="calculator__button add-button accent">+</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default App