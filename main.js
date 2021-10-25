import { createFooterElement } from './lib/footerElement';
import { createHeaderElement } from './lib/headerElement';
import { createMarioCard } from './components/marioCard';
import { createMainElement } from './lib/mainElement';
import { fetchCharacters } from './lib/fetchCharacters';
import { createSearchBar } from './components/searchBar';
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

  async function handleSubmit(searchQuery) {
    const url =
      'https://mario-kart-tour-api.herokuapp.com/api/v1/drivers/name_contains?q=';
    const charactersSearch = await fetchCharacters(url + searchQuery);
    const searchCards = charactersSearch.map((character) =>
      createMarioCard(character)
    );
    mainElement.innerHTML = '';
    mainElement.prepend(...searchCards);
  }

  headerElement.append(searchBar);

  mainElement.append(...marioCardList);

  appElement.append(headerElement, mainElement, footerElement);
}

createApp();
