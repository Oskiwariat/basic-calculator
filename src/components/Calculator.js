import React from "react";

import "../styles/Calculator.css";

class Calculator extends React.Component {
  state = {
    score: "",
    firstAmount: null,
    type: null,
  };

  handleClearButton = () => {
    this.setState({
      score: "",
      firstAmount: null,
      type: null,
    });
  };

  handleNumberButton = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (
      name === "one" ||
      name === "two" ||
      name === "three" ||
      name === "four" ||
      name === "five" ||
      name === "six" ||
      name === "seven" ||
      name === "eight" ||
      name === "nine"
    ) {
      this.setState((prevState) => ({
        score: (prevState.score += value),
      }));
    }
  };

  handlePlusButton = () => {
    this.setState((prevState) => ({
      type: "addition",
      firstAmount: prevState.score,
      score: "",
    }));
  };

  handleMinusButton = () => {
    this.setState((prevState) => ({
      type: "subtraction",
      firstAmount: prevState.score,
      score: "",
    }));
  };

  handleDivisionButton = () => {
    this.setState((prevState) => ({
      type: "division",
      firstAmount: prevState.score,
      score: "",
    }));
  };

  // handleEqualSignButton = () => {
  //   this.setState({
  //     score: Number(this.state.firstAmount) - Number(this.state.score),
  //     firstAmount: null,
  //   });
  // };

  handleEqualSignButton = () => {
    let type = this.state.type;
    if (type === "addition") {
      this.setState({
        score: Number(this.state.firstAmount) + Number(this.state.score),
        firstAmount: null,
      });
    } else if (type === "subtraction") {
      this.setState({
        score: Number(this.state.firstAmount) - Number(this.state.score),
        firstAmount: null,
      });
    }
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
              <button
                onClick={this.handleNumberButton}
                name="one"
                value="1"
                id="one"
              >
                1
              </button>
              <button
                onClick={this.handleNumberButton}
                name="two"
                value="2"
                id="two"
              >
                2
              </button>
              <button
                onClick={this.handleNumberButton}
                name="three"
                value="3"
                id="three"
              >
                3
              </button>
              <button
                onClick={this.handleNumberButton}
                name="four"
                value="4"
                id="four"
              >
                4
              </button>
              <button
                onClick={this.handleNumberButton}
                name="five"
                value="5"
                id="five"
              >
                5
              </button>
              <button
                onClick={this.handleNumberButton}
                name="six"
                value="6"
                id="six"
              >
                6
              </button>
              <button
                onClick={this.handleNumberButton}
                name="seven"
                value="7"
                id="seven"
              >
                7
              </button>
              <button
                onClick={this.handleNumberButton}
                name="eight"
                value="8"
                id="eight"
              >
                8
              </button>
              <button
                onClick={this.handleNumberButton}
                name="nine"
                value="9"
                id="nine"
              >
                9
              </button>
            </div>

            <div id="operations">
              <button onClick={this.handlePlusButton} name="addition" id="plus">
                +
              </button>
              <button
                onClick={this.handleMinusButton}
                name="subtraction"
                id="minus"
              >
                -
              </button>
              <button
                onClick={this.handleDivisionButton}
                name="division"
                id="division"
              >
                /
              </button>
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
