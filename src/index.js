import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { pokemonReducer } from './reducers/pokemons';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { logger } from './middlewares/index';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhacers = composeAlt( applyMiddleware(thunk, logger));

const store = createStore(pokemonReducer, composedEnhacers);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

