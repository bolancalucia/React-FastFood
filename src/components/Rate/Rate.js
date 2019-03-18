import React, { Component } from "react";
import "./Rate.css";

export class Rate extends Component {
  constructor(props) {
    super(props);
    let rates = this.props.rates.map(review => review.rate);
    this.state = {
      rates: rates
    };
  }

  Calculate = () => {
    const sumRates = this.state.rates.reduce((sum, curr) => sum + curr);
    let result = +(sumRates / this.state.rates.length).toFixed(2);
    return result;
  };

  SendRate = newRate => {
    this.setState({ rates: [...this.state.rates, newRate] });
  };

  StarWidth = () => {
    return ( this.Calculate() * 150 ) / 5;
  }

  render() {
    return (
      <div className="rateCard">
        <p>
          <b>
            Current rate: {this.Calculate()} out of {this.state.rates.length}{" "}
            reviews.
          </b>
        </p>
        <div className="crop" style={{width: this.StarWidth()}}>
        <span className="rate-div">
          <span
            onClick={() => this.SendRate(1)}
            title="Very bad"
            className="fa fa-star fa-2x">
          </span>
          <span
            onClick={() => this.SendRate(2)}
            title="Bad"
            className="fa fa-star fa-2x"
          >
          </span>
          <span
            onClick={() => this.SendRate(3)}
            title="Average"
            className="fa fa-star fa-2x"
          >
          </span>
          <span
            onClick={() => this.SendRate(4)}
            title="Good"
            className="fa fa-star fa-2x"
          >
          </span>
          <span
            onClick={() => this.SendRate(5)}
            title="Excellent"
            className="fa fa-star fa-2x"
          >
          </span>
        </span>
        </div>
      </div>
    );
  }
}

export default Rate;
