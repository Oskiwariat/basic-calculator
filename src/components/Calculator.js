import React from "react";

import "../styles/Calculator.css";

class Calculator extends React.Component {
  render() {
    return (
      <>
        <div id="calculator">
          <div id="view">
            <span id="result">0</span>
          </div>

          <div id="panel">
            <div id="numbers">
              <button id="clear">clear</button>
              <button id="one">1</button>
              <button id="two">2</button>
              <button id="three">3</button>
              <button id="four">4</button>
              <button id="five">5</button>
              <button id="six">6</button>
              <button id="seven">7</button>
              <button id="eight">8</button>
              <button id="nine">9</button>
            </div>

            <div id="operations">
              <button id="minus">-</button>
              <button id="plus">+</button>
              <button id="division">/</button>
              <button id="score">=</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
