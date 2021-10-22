import { createFooterElement } from './lib/footerElement';
import { createHeaderElement } from './lib/headerElement';
import { createMainElement } from './lib/mainElement';
import './style.css';

function createApp() {
  const appElement = document.querySelector('#app');
  const headerElement = createHeaderElement();
  const mainElement = createMainElement();
  const footerElement = createFooterElement();

  appElement.append(headerElement, mainElement, footerElement);
}

createApp();
