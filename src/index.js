import React from 'react';
import {render} from 'react-dom';
import App from './App';
import reducer,{initialState} from './reducer/Reducer';
import { StateProvider } from './reducer/StateProvider';
import "./style.css";
import 'rsuite/lib/styles/index.less';

render(
  <React.StrictMode>
  <StateProvider  initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
