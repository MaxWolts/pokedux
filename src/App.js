import './App.css';
import { Col } from 'antd';
import { Spin } from 'antd';
import { PokemonList } from './components/PokemonList';
import { Searcher } from './components/Searcher';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './api/index';
import { useEffect, useRef } from 'react';
import { getPokemonsWithDetails, setLoading } from './actions';
import logo from './statics/logo.svg';


function App() {
  const pokemons = useSelector((state) => state.getIn(['data', 'pokemons'], shallowEqual)).toJS();
  const loading = useSelector((state) => state.getIn(['ui', 'loading']));
  const dispatch = useDispatch();
  const ref = useRef(false)

  useEffect(() => {
    if (ref.current === false) {
      ref.current = true
      const fetchPokemons = async () => {
        dispatch(setLoading(true));
        const pokemoRes = await getPokemons();
        dispatch(getPokemonsWithDetails(pokemoRes));
        dispatch(setLoading(false));
      }
      fetchPokemons();
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
