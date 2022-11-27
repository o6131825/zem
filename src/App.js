import React from "react";
import Main from "./main";
import { store } from './store/store'
import { Provider } from 'react-redux'
import "./App.css";



export default function App() {
  





  return (
    <Provider store={store}>
      <div
        className="App">
        <Main />
      </div>
    </Provider>
  );
}
