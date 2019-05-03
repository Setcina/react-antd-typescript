import React from 'react';
import ReactDOM from 'react-dom';
import {HeadersView} from './component/header';
import { Provider } from 'react-redux';
import { store } from './Store';
ReactDOM.render(
  <Provider store={store}>
    <HeadersView/>
  </Provider>,
  document.getElementById('root')
)
