import jokeButtons from '../../components/buttons/buttons';
import domBuilder from '../../components/domBuilder';
import domEvents from '../../components/events/domEvents';

const startApp = () => {
  domBuilder();
  jokeButtons();
  domEvents();
};

export default startApp;
