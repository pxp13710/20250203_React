import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// npm i bootstrap sweetalert2
// npm i react-router-dom axios
// 이전 npm i redux redux-thunk(redux-saga) react-redux
// 대체 라이브러리 => npm i recoil 또는 zustand
// npm i @reduxjs/toolkit react-redux

import { BrowserRouter } from 'react-router-dom'

// store 설정
import { Provider } from 'react-redux'

// 폴더내부에서 import 할 파일명이 index.js, index.json의 경우 파일명 생략 가능
import store from './store'
/*
import { configureStore } from '@reduxjs/toolkit'
import countStore from './store/countStore'
import todoStore from './store/todoStore'
const store = configureStore({
  reducer: {
    // countStore: countStore,        // redux 또는 createReducer를 사용하는 경우
    countStore: countStore.reducer,   // createSlice를 사용하는 경우
    todoStore: todoStore.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    // serializableCheck true => store에 넘어오는 값이 직렬화된 값이니? 
    return getDefaultMiddleware({ serializableCheck: true })
  }
})
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
