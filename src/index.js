import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';
import Header from './components/header.js';
import Footer from './components/footer.js';

ReactDOM.render(
    <Header text=" Markdown Previewer" />
  , document.querySelector('.header'));

ReactDOM.render(
    <App />
  , document.querySelector('.content'));

  ReactDOM.render(
      <Footer text="Markdown Previewer - DeSean Ellis [FreeCodeCamp]"/>
    , document.querySelector('.footer'));
