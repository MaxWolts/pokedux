import axios from 'axios';
const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
// const URL = ''

const getPokemon = () => {
  return axios.get(URL)
  .then(res => res.data.results)
  .catch(err => console.log(err));
}

const getPokemonDetails = (pokemon) => {
  return axios.get(pokemon.url)
  .then(res => res.data)
  .catch((err) => console.log(err));
}


export { getPokemon, getPokemonDetails };
