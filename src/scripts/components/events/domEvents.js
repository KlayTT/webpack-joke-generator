import clearDom from '../../helpers/auth/clearDom';
import { getJoke, setJokeData, jokeData } from '../../helpers/jokeData';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('get-joke-btn')) {
      getJoke().then((obj) => {
        setJokeData(obj);
        document.querySelector('#joke-container').innerHTML = `
        <h1>${jokeData.setup}</h1>
        `;
        document.querySelector('#button-container').innerHTML = `
        <button type="button" id="get-punch-btn" class="btn btn-outline-info">Get the Punchline</button>
        `;
      });
    }

    if (e.target.id.includes('get-punch-btn')) {
      document.querySelector('#punch-container').innerHTML = `
      <h1>${jokeData.delivery}</h1>  
      `;
      document.querySelector('#button-container').innerHTML = `
      <button type="button" id="get-new-joke-btn" class="btn btn-outline-info">Get a new Joke</button>
      `;
    }

    if (e.target.id.includes('get-new-joke-btn')) {
      clearDom();
      getJoke().then((obj) => {
        setJokeData(obj);
        document.querySelector('#joke-container').innerHTML = `
        <h1>${jokeData.setup}</h1>
        `;
        document.querySelector('#button-container').innerHTML = `
        <button type="button" id="get-punch-btn" class="btn btn-outline-info">Get the Punchline</button>
        `;
      });
    }
  });
};

export default domEvents;
