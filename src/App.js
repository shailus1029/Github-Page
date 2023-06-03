
import React from 'react';
import './App.css';
import { Routes } from './Routes'
import { Provider } from 'react-redux'
import { configureStore } from './store/configureStore'

const store = configureStore()


const App = (props) => {
  return (
      <Provider store={store} >
        <Routes />
      </Provider>
  )
}

export default App;
