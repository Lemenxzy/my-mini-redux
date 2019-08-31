import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider, createStore, applyMiddleware } from './myredux'

import { counter } from './actions';
import thunk from './myredux/core/mini-redux-thunk';

const store = createStore(counter, applyMiddleware(thunk));

const render = () => {
    ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
};

render();

serviceWorker.unregister();
