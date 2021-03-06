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
    const { name, value } = e.target;
    if (
      name === "zero" ||
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

  handleOperationButton = (e) => {
    const name = e.target.name;
    const score = this.state.score;

    if (score === "") {
      return alert(
        "Najpierw wpisz liczbe! Dopiero potem wybierz znak operacji!"
      );
    }

    if (name === "addition") {
      this.setState((prevState) => ({
        type: "addition",
        firstAmount: prevState.score,
        score: "",
      }));
    } else if (name === "subtraction") {
      this.setState((prevState) => ({
        type: "subtraction",
        firstAmount: prevState.score,
        score: "",
      }));
    } else if (name === "division") {
      this.setState((prevState) => ({
        type: "division",
        firstAmount: prevState.score,
        score: "",
      }));
    } else if (name === "multiply") {
      this.setState((prevState) => ({
        type: "multiply",
        firstAmount: prevState.score,
        score: "",
      }));
    }
  };

  handleEqualSignButton = () => {
    const { type, firstAmount, score } = this.state;

    if (type === null) {
      return alert(
        "Nie wybrałeś co chcesz zrobić!. Dodać, odjąć czy podzielić?"
      );
    } else if (firstAmount.length > 13) {
      this.setState({
        score: "",
        type: null,
        firstAmount: null,
      });
      return alert(
        "Niestety nie mogliśmy przeprowadzić tego działania. Ten kalkulator nie wyświetla więcej niż 13 liczb na ekranie! Spróbuj wykonywać odrobinę mniejsze działania!"
      );
    } else if (type === "addition") {
      this.setState({
        score: Number(firstAmount) + Number(score),
        firstAmount: null,
      });
    } else if (type === "subtraction") {
      this.setState({
        score: Number(firstAmount) - Number(score),
        firstAmount: null,
      });
    } else if (type === "division") {
      this.setState({
        score: Number(firstAmount) / Number(score),
        firstAmount: null,
      });
    } else if (type === "multiply") {
      this.setState({
        score: Number(firstAmount) * Number(score),
        firstAmount: null,
      });
    }
  };

  render() {
    return (
      <>
        <div className="calculator">
          <h1 className="calculator__title">Calculator</h1>
          <div className="calculator__body">
            <div className="view">
              <span className="view__result">{this.state.score}</span>
            </div>

            <div className="panel">
              <div className="panel__numbers">
                <button
                  className="panel__numbers-button panel__numbers--clear"
                  onClick={this.handleClearButton}
                >
                  clear
                </button>
                <button
                  className="panel__numbers-button"
                  onClick={this.handleNumberButton}
                  name="one"
                  value="1"
                >
                  1
                </button>
                <button
                  className="panel__numbers-button"
                  onClick={this.handleNumberButton}
                  name="two"
                  value="2"
                >
                  2
                </button>
                <button
                  className="panel__numbers-button"
                  onClick={this.handleNumberButton}
                  name="three"
                  value="3"
                >
                  3
                </button>
                <button
                  className="panel__numbers-button"
                  onClick={this.handleNumberButton}
                  name="four"
                  value="4"
                >
                  4
                </button>
                <button
                  className="panel__numbers-button"
                  onClick={this.handleNumberButton}
                  name="five"
                  value="5"
                >
                  5
                </button>
                <button
                  className="panel__numbers-button"
                  onClick={this.handleNumberButton}
                  name="six"
                  value="6"
                >
                  6
                </button>
                <button
                  className="panel__numbers-button"
                  onClick={this.handleNumberButton}
                  name="seven"
                  value="7"
                >
                  7
                </button>
                <button
                  className="panel__numbers-button"
                  onClick={this.handleNumberButton}
                  name="eight"
                  value="8"
                >
                  8
                </button>
                <button
                  className="panel__numbers-button"
                  onClick={this.handleNumberButton}
                  name="nine"
                  value="9"
                >
                  9
                </button>
                <button
                  className="panel__numbers-button panel__numbers--zero"
                  onClick={this.handleNumberButton}
                  name="zero"
                  value="0"
                >
                  0
                </button>
              </div>

              <div className="panel__operations">
                <button
                  class="panel__operations-button"
                  onClick={this.handleOperationButton}
                  name="addition"
                >
                  +
                </button>
                <button
                  class="panel__operations-button"
                  onClick={this.handleOperationButton}
                  name="subtraction"
                >
                  -
                </button>
                <button
                  class="panel__operations-button"
                  onClick={this.handleOperationButton}
                  name="division"
                >
                  /
                </button>
                <button
                  class="panel__operations-button"
                  onClick={this.handleOperationButton}
                  name="multiply"
                >
                  *
                </button>
                <button
                  class="panel__operations-button"
                  onClick={this.handleEqualSignButton}
                  id="score"
                >
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
