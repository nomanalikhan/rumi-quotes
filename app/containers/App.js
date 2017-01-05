import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RandomQuote from '../components/RandomQuote';
import * as QuotesActions from '../actions/quotes';
import style from './App.css';

@connect(
  state => ({
    quotes: state.quotes
  }),
  dispatch => ({
    actions: bindActionCreators(QuotesActions, dispatch)
  })
)
export default class App extends Component {

  static propTypes = {
    quotes: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const { quotes } = this.props;

    return (
      <div className={style.normal}>
      	<RandomQuote quotes={quotes} />
      </div>
    );
  }
}
