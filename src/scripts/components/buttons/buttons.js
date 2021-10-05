import clearDom from '../../helpers/auth/clearDom';

const jokeButtons = () => {
  clearDom();
  document.querySelector('#button-container').innerHTML = `
  <h5>Hi</h5>
  <button type="button" id="get-joke-btn" class="btn btn-outline-info">Get a Joke</button>
  `;
};

export default jokeButtons;
