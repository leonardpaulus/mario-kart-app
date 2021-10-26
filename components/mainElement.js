import { createElement } from '../lib/elements';

export function createMainElement() {
  const mainElement = createElement('main', { className: 'main' });
  return mainElement;
}
