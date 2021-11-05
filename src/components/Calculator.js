import React from "react";

import "../styles/Calculator.css";

class Calculator extends React.Component {
  state = {
    score: 0,
    firstNumber: null,
    secondNumber: null,
  };

  handleClearButton = () => {
    this.setState({
      score: 0,
    });
  };

  handleOneButton = () => {
    this.setState((prevState) => ({
      score: prevState.score + 1,
    }));
  };

  render() {
    return (
      <>
        <div id="calculator">
          <div id="view">
            <span id="result">{this.state.score}</span>
          </div>

          <div id="panel">
            <div id="numbers">
              <button onClick={this.handleClearButton} id="clear">
                clear
              </button>
              <button onClick={this.handleOneButton} id="one">
                1
              </button>
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
