import { createElement } from './elements';

export function createHeaderElement() {
  const headerElement = createElement('header', { className: 'header' }, [
    createElement('h1', { textContent: 'Mario-Kart API' }),
  ]);
  return headerElement;
}
