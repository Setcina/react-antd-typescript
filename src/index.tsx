import React from 'react';
import ReactDOM from 'react-dom';
import {DemoView} from './component/demo';
import { Provider } from 'react-redux';
import { store } from './Store';
ReactDOM.render(
  <Provider store={store}>
    <DemoView/>
  </Provider>,
  document.getElementById('root')
)


ReactDOM.render(
  <Loading/>,
  document.getElementById('loading-antd')
)

