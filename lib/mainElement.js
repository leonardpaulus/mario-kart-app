import { createElement } from './elements';

export function createMainElement() {
  const mainElement = createElement('main', { className: 'main' }, [
    createElement('h3', { textContent: 'This is main' }),
  ]);
  return mainElement;
}
