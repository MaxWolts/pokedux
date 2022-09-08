import axios from 'axios';
const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
// const URL = ''

const getPokemons = () => {
  return axios.get(URL)
  .then(res => res.data.results)
  .catch(err => console.log(err));
}

const getPokemonDatails = (pokemon) => {
  return axios.get(pokemon.url)
  .then(res => res.data)
  .catch((err) => console.log(err));
}


export { getPokemons, getPokemonDatails };
