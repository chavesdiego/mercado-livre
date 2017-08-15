import React from 'react'

import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import Routes from './routes'
import reducers from './reducers'

import './styles/App.css'

const history = createBrowserHistory()

const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware)
)

render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
