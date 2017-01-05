import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../../app/containers/Root';
import { Quotes } from '../../app/api/Quotes';
import './todoapp.css';

chrome.storage.local.get('state', (obj) => {
  const { state } = obj;
  const initialState = {
  	quotes: Quotes,
  };

  const createStore = require('../../app/store/configureStore');

  ReactDOM.render(
    <Root store={createStore(initialState)} />,
    document.querySelector('#root')
  );
});
