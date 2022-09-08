import './App.css';
import { Col } from 'antd';
import { PokemonList } from './components/PokemonList';
import { Searcher } from './components/Searcher';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './api/index';
import { useEffect } from 'react';
import { getPokemonsWithDetails } from './actions';
import logo from './statics/logo.svg';

function App() {
  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemoRes = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemoRes));
    }
    fetchPokemons();
  }, []);
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux'/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
};



export default App;
