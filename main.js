import { createFooterElement } from './lib/footerElement';
import { createHeaderElement } from './lib/headerElement';
import { createMarioCard } from './components/marioCard';
import { createMainElement } from './lib/mainElement';
import { fetchCharacters } from './lib/fetchCharacters';
import './style.css';

async function createApp() {
  const appElement = document.querySelector('#app');

  const headerElement = createHeaderElement();

  const mainElement = createMainElement();

  const footerElement = createFooterElement();

  const characters = await fetchCharacters();

  const marioCards = characters.map((character) => createMarioCard(character));

  mainElement.append(...marioCards);

  appElement.append(headerElement, mainElement, footerElement);
}

createApp();
