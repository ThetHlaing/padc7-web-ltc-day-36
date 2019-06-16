import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import Register from './components/register';

// create any initial state needed
const initialState = {};
const mockStore = configureStore();
let store;

beforeEach(() => {
  //creates the store with any initial state or middleware needed  
  store = mockStore(initialState)
})

it('redux renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});
