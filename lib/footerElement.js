import { createElement } from './elements';

export function createFooterElement() {
  const footerElement = createElement('footer', { className: 'footer' }, [
    createElement('h3', { textContent: 'This is footer' }),
  ]);
  return footerElement;
}
