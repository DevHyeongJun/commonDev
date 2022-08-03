import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './redux/store/index'

import { Provider } from 'react-redux';

//store를 사용하기 위해선 Provider로 전역을 깜사줘야한다.
//ContextAPI 기반이라 사용되는 듯?
//경험 상 .
//ContextAPI 로 짜면 복잡해진다. 상태관리도 매우 복잡함.
//이유는 간편화되있지 않고, 간편하게 사용하려면 공수가 많이 들어간다.
//반박하는 사람들 심리를 잘 모르겠다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
   <App />
  </Provider>
);

reportWebVitals();
