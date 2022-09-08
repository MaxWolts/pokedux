import { PokemonCard } from "./PokemonCard";
import './PokemonList.css';

const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {
        pokemons.map(pokemon => (<PokemonCard name={pokemon.name} image={pokemon.sprites.front_default} key={pokemon.id} types={pokemon.types}/>))
      }
    </div>
  )
}
PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
};

export { PokemonList };
