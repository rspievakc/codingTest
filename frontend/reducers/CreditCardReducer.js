import { types } from '../actions/CreditCardActions'

// Initial state for the creditCard redux store
const INITIAL_STATE = {
  cards: [],
  loading: false,
  error: false,
}

// Reducers
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_CARD:
      return {
        ...state,        
      }
    case types.CARDS_LOADED:
    {
      return {
        ...state,
        cards: action.payload,
      }
    }
    case types.ERROR:
      return {
        ...state,
        error: action.payload
      }
    case types.LOADING:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state
  }
}
