
import React from 'react';
import './App.css';
import "./common.css"
import { Routes } from './Routes'
import { Provider } from 'react-redux'
import { configureStore } from './redux/configureStore'

const store = configureStore()


const App = (props) => {
  return (
      <Provider store={store} >
        <Routes />
      </Provider>
  )
}

export default App;
