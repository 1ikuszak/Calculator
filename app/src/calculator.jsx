import React from "react";

const Calculator = () => {
    return (
        <div className="calculator">
            <div className="calculator__display">
                <input disabled="true" value="0" maxLength="10"></input>
            </div>

            <div className="calculator__buttons">
                <div className="column">
                    <button className="calculator__button accent">C/CE</button>
                    <button className="calculator__button accent2">MRC</button>
                    <button className="calculator__button">7</button>
                    <button className="calculator__button">4</button>
                    <button className="calculator__button">1</button>
                    <button className="calculator__button">0</button>
                </div>
                <div className="column">
                    <button className="calculator__button accent">OFF</button>
                    <button className="calculator__button accent2">M-</button>
                    <button className="calculator__button">8</button>
                    <button className="calculator__button">5</button>
                    <button className="calculator__button">2</button>
                    <button className="calculator__button">.</button>
                </div>
                <div className="column">
                    <button className="calculator__button accent">√</button>
                    <button className="calculator__button accent2">M+</button>
                    <button className="calculator__button">9</button>
                    <button className="calculator__button">6</button>
                    <button className="calculator__button">3</button>
                    <button className="calculator__button accent">=</button>
                </div>
                <div className="column">
                    <button className="calculator__button accent">%</button>
                    <button className="calculator__button accent">÷</button>
                    <button className="calculator__button accent">x</button>
                    <button className="calculator__button accent">-</button>
                    <button className="calculator__button add-button accent">+</button>
                </div>
            </div>
        
        </div>
    );
}

export default Calculator;