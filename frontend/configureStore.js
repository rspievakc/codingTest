import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

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

if (process.env.NODE_ENV !== 'production') {
  middlewares = [...middlewares, logger]
}

let createStoreWithMiddleware
if (process.env.NODE_ENV !== 'production') {
  createStoreWithMiddleware = composeWithDevTools(applyMiddleware(...middlewares))(createStore)
} else {
  createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
}

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)
  return store
}
