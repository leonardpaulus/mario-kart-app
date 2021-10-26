import { createElement } from '../lib/elements';
import styles from './searchBar.module.css';

export function createSearchBar(onSearch) {
  let timeoutId;
  const searchInput = createElement('input', {
    className: styles.searchInput,
    type: 'text',
    required: true,
    placeholder: 'Are you looking for a Character?',
    oninput: () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        onSearch(searchInput.value);
      }, 400);
    },
  });

  const searchButton = createElement(
    'button',
    {
      className: styles.searchButton,
      type: 'submit',
    },
    ['🔍']
  );

  const searchBar = createElement(
    'form',
    {
      className: styles.searchBar,
      onsubmit: function (event) {
        event.preventDefault();
        onSearch(searchInput.value);
        searchInput.value = '';
      },
    },
    [searchInput, searchButton]
  );

  return searchBar;
}
