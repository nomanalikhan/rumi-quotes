import React, { PropTypes, Component } from 'react';

export default class RandomQuotes extends Component {

  static propTypes = {
    quotes: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.state = {
      quote: this.getRandomQuote(props.quotes),
    };
  }

  getRandomQuote(quotes) {
    var quote = '';
    if (quotes.length) {
      var index = this.getRandomInt(0, quotes.length - 1);
      quote = quotes[index];
    }
    return quote;
  }

  /**
   * Returns a random integer between min (inclusive) and max (inclusive)
   * Using Math.round() will give you a non-uniform distribution!
   */
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    const quote = this.state.quote;
    return (
      <div>
        <h1>{quote}</h1>
      </div>
    );
  }
}