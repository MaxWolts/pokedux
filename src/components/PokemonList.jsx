import { PokemonCard } from "./PokemonCard";
import './PokemonList.css';

const PokemonList = ({ pokemons }) => {
  const noresultStyle = {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    gridColum: 2,
    textAlign: 'center'
  }

  return (
    <>
      {pokemons.length > 0?
        <div className="PokemonList">
          {
            pokemons.map(pokemon => (<PokemonCard name={pokemon.name} image={pokemon.sprites.front_default} key={pokemon.id} types={pokemon.types} id={pokemon.id} favorite={pokemon.favorite}/>))
          }
        </div> : <div><p style={noresultStyle}>No results</p></div>
      }
    </>
  )
}
PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
};

export { PokemonList };
