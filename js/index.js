require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';

let listTitles = ['Priorities', 'In-Progress', 'Ready For Review', 'Completed'];

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Board title="Secret Project" lists={listTitles}/>, document.getElementById('app'))
});
