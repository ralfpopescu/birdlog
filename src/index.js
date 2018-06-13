import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import reducers from './redux/reducers'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Map, List } from 'immutable';

const init = Map({ month: 0 });

const store = createStore(reducers, init)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
