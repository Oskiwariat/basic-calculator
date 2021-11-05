import React from "react";

import "../styles/Calculator.css";

class Calculator extends React.Component {
  state = {
    score: "",
    firstAmount: null,
    // secondAmount: null,
  };

  handleClearButton = () => {
    this.setState({
      score: "",
      firstAmount: null,
      secondAmount: null,
    });
  };

  // handleOneButton = () => {
  //   this.setState((prevState) => ({
  //     score: (prevState.score += "1"),
  //   }));
  // };

  // handleTwoButton = () => {
  //   this.setState((prevState) => ({
  //     score: (prevState.score += "2"),
  //   }));
  // };

  handleNumberButton = (e) => {
    const name = e.target.name;
    if (name === "one") {
      console.log("jeden");
    }
  };

  handlePlusButton = () => {
    this.setState((prevState) => ({
      firstAmount: prevState.score,
      score: "",
    }));
  };

  handleEqualSignButton = () => {
    this.setState({
      score: Number(this.state.firstAmount) + Number(this.state.score),
    });
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
              <button onClick={this.handleNumberButton} name="one" id="one">
                1
              </button>
              <button onClick={this.handleNumberButton} name="two" id="two">
                2
              </button>
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
              <button onClick={this.handlePlusButton} id="plus">
                +
              </button>
              <button id="division">/</button>
              <button onClick={this.handleEqualSignButton} id="score">
                =
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
