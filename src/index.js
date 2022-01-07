import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
//import Container from './containers/Container';
import AppRouter from './routers/AppRouter';

ReactDOM.render(
  <Provider store={store}>
    {/* <Container /> */}
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
