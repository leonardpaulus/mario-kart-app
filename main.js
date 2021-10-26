import { createFooterElement } from './components/footerElement';
import { createHeaderElement } from './components/headerElement';
import { createMarioCard } from './components/marioCard';
import { createMainElement } from './components/mainElement';
import { fetchCharacters } from './lib/fetchCharacters';
import { createSearchBar } from './components/searchBar';
import { handleSubmit } from './lib/handleSubmit';
import './style.css';

async function createApp() {
  const appElement = document.querySelector('#app');

  const headerElement = createHeaderElement();

  const searchBar = createSearchBar(handleSubmit);

  const mainElement = createMainElement();

  const footerElement = createFooterElement();

  const characters = await fetchCharacters(
    'https://mario-kart-tour-api.herokuapp.com/api/v1/drivers'
  );

  const marioCardList = characters.map((character) =>
    createMarioCard(character)
  );

  headerElement.append(searchBar);

  mainElement.append(...marioCardList);

  appElement.append(headerElement, mainElement, footerElement);
}

createApp();
