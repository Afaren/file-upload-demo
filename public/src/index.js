import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';

const store = createStore(rootReducer);

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
);