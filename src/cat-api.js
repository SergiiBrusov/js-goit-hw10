const BROWSE_IMG = 'https://api.thecatapi.com/v1';
const BROWSE_IDENTITY = 'breed_ids';
const API_KEY = 'live_nitLxXmsTk1VAdFSCieB8uTgw8YYxIM7H12PU6F8K6nOZZsveQCP1aveOUIwZTan';

export function fetchBreeds() {
  return fetch(`${BROWSE_IMG}/breeds?api_key=${API_KEY}`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    })
}

export function fetchCatByBreed(breedId) {
  return fetch(`${BROWSE_IMG}/images/search?api_key=${API_KEY}&${BROWSE_IDENTITY}=${breedId}`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }  
      return resp.json();
    })
}