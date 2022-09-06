import axios from 'axios';
const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'

const getPokemons = () => {
  return axios.get(URL)
  .then(res => res.data.results)
  .catch(err => console.log(err));
}

export { getPokemons };
