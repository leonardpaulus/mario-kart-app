import { createElement } from '../lib/elements';

export function createFooterElement() {
  const footerElement = createElement('footer', { className: 'footer' }, [
    createElement('h3', { textContent: 'This is footer' }),
  ]);
  return footerElement;
}
