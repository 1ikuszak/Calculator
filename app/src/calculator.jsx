import React from "react";

const Calculator = () => {
    return (
        <div className="calculator">
            <div className="calculator__display">
                <input></input>
            </div>

            <div className="calculator__buttons">
                <div className="column">
                    <button className="calculator__button">C/CE</button>
                    <button className="calculator__button">MRC</button>
                    <button className="calculator__button">7</button>
                    <button className="calculator__button">4</button>
                    <button className="calculator__button">1</button>
                    <button className="calculator__button">0</button>
                </div>
                <div className="column">
                    <button className="calculator__button">OFF</button>
                    <button className="calculator__button">M-</button>
                    <button className="calculator__button">8</button>
                    <button className="calculator__button">5</button>
                    <button className="calculator__button">2</button>
                    <button className="calculator__button">.</button>
                </div>
                <div className="column">
                    <button className="calculator__button">√</button>
                    <button className="calculator__button">M+</button>
                    <button className="calculator__button">9</button>
                    <button className="calculator__button">6</button>
                    <button className="calculator__button">3</button>
                    <button className="calculator__button">=</button>
                </div>
                <div className="column">
                    <button className="calculator__button">%</button>
                    <button className="calculator__button">÷</button>
                    <button className="calculator__button">x</button>
                    <button className="calculator__button">-</button>
                    <button className="calculator__button">+</button>
                </div>
            </div>
        
        </div>
    );
}

export default Calculator;