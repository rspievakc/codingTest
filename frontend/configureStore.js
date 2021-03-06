import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

/**
 * Redux store configuration
 * 
 * We are using several middlewares and we need to combine them.
 */

const logger = createLogger({
  level: 'info',
  collapsed: false,
  logger: console,
  predicate: (getState, action) => true
})

export const history = createBrowserHistory()

const router = routerMiddleware(history)

let middlewares = [
  thunk,
  router
]

const NODE_ENV = process.env.NODE_ENV
if (NODE_ENV !== 'production' && NODE_ENV !== 'test') {
  middlewares = [...middlewares, logger]
}

let createStoreWithMiddleware
if (NODE_ENV !== 'production' && NODE_ENV !== 'test') {
  createStoreWithMiddleware = composeWithDevTools(applyMiddleware(...middlewares))(createStore)
} else {
  createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
}

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)
  return store
}
