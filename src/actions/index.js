import { SET_POKEMONS } from './types';
import { getPokemonDatails } from '../api';

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
})

export const getPokemonsWithDetails = (pokemons = []) => async (dispatch) => {
  const pokemonsDetailed = await Promise.all(pokemons.map(pokemon => getPokemonDatails(pokemon)));

  dispatch(setPokemons(pokemonsDetailed));
};
