import './App.css';
import { Col } from 'antd';
import { Spin } from 'antd';
import { PokemonList } from './components/PokemonList';
import { Searcher } from './components/Searcher';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import logo from './statics/logo.svg';
import { fetchPokemonsWithDetails } from './slices/dataSlice';


function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual)
  const loading = useSelector((state) => state.ui.loading);
  // const loading = false;

  const dispatch = useDispatch();
  const ref = useRef(false)

  useEffect(() => {
    if (ref.current === false) {
      ref.current = true
      dispatch(fetchPokemonsWithDetails())
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux'/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      {loading? (<Col offset={12}>
        <Spin spinning size='large'></Spin>
      </Col>) : (<PokemonList pokemons={pokemons}/>)}


    </div>
  );
};



export default App;
