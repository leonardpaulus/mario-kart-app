export async function fetchCharacters() {
  const response = await fetch(
    'https://mario-kart-tour-api.herokuapp.com/api/v1/drivers'
  );
  const body = await response.json();

  return body;
}
