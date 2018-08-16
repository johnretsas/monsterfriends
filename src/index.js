import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { searchRobots, requestRobots } from './reducers';
import { logger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

const rootReducer = combineReducers({requestRobots, searchRobots})
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(<Provider store={store}>
            <App />
            </Provider>,        
            document.getElementById('root'));
registerServiceWorker();
