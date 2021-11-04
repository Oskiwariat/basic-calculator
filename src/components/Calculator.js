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
              <button>clear</button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>7</button>
              <button>8</button>
              <button>9</button>
            </div>

            <div id="operations">
              <button>-</button>
              <button>+</button>
              <button>/</button>
              <button>=</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
