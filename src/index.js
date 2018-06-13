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

const store = createStore(reducers)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
