import './App.css';
import { Col } from 'antd';
import { Spin } from 'antd';
import { PokemonList } from './components/PokemonList';
import { Searcher } from './components/Searcher';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import logo from './statics/logo.svg';
import { fetchPokemonsWithDetails } from './slices/dataSlice';


function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();
  const ref = useRef(false);
  const [pokemonSearch, setPokemonSearch] = useState('');

  const handdleSearch = (name) => {
    if (!loading) {
      setPokemonSearch(name);
    }
  }
  const findPokemon  = () => {
    return pokemons.filter(pokemon => pokemon.name.includes(pokemonSearch));
  }

  useEffect(() => {
    if (ref.current === false) {
      ref.current = true
      dispatch(fetchPokemonsWithDetails())
    }
  }, [dispatch]);

  return (
    <div className="App">
      <div className='header'>
        <img src={logo} alt='Pokedux' />
      </div>
      <Col span={12} offset={6}>
        <Searcher handdleSearch={handdleSearch}/>
      </Col>
      {loading? (<Col offset={12}>
        <Spin spinning size='large'></Spin>
      </Col>) : (<PokemonList pokemons={pokemonSearch? findPokemon() : pokemons}/>)}
    </div>
  );
};



export default App;
