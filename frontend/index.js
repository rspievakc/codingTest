import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import 'semantic-ui-css/semantic.min.css'
import configureStore, { history } from './configureStore'
import App from './App'

const container = document.getElementById('root')
const store = configureStore()

ReactDOM.render(
  (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <App />
          </div>
        </ConnectedRouter>
      </Provider>
  ), container
)

module.hot.accept()
