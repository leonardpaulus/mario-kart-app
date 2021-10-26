import { createMarioCard } from '../components/marioCard';
import { fetchCharacters } from './fetchCharacters';

export async function handleSubmit(searchQuery) {
  const url =
    'https://mario-kart-tour-api.herokuapp.com/api/v1/drivers/name_contains?q=';
  const charactersSearch = await fetchCharacters(url + searchQuery);
  const searchCards = charactersSearch.map((character) =>
    createMarioCard(character)
  );
  const mainElement = document.querySelector('main');
  mainElement.innerHTML = '';
  mainElement.prepend(...searchCards);
}
