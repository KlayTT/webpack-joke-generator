// INSTRUCTORS: DO NOT directly edit this sandbox. Fork it, and place the fork inside the cohort folder.

import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
// import jokeData from './helpers/jokeData';
import startApp from './helpers/views/shartApp';

const init = () => {
  document.querySelector('#app').innerHTML = `
  `;

  // jokeData().then(console.warn);
  startApp();
};

init();
