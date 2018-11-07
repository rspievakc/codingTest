import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import CreditCardReducer from './CreditCardReducer'

export default combineReducers({
  creditCard: CreditCardReducer,
  form: formReducer,
  routing: routerReducer,
})
