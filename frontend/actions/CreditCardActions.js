import axios from 'axios'
import { push } from 'react-router-redux'

// Redux types
export const types = {
  
  ADD_CARD: "ADD_CARD",
  LIST_CARDS: "LIST_CARDS",
  CARDS_LOADED: "CARDS_LOADED",

  LOADING: "LOADING",
  ERROR: "ERROR",

} 

// Redux action creators
export const loading = (value) => {
  return {
    type: types.LOADING,
    payload: value,
  }
}

export const cardsLoaded = (cards) => {
  return {
    type: types.CARDS_LOADED,
    payload: cards,
  }
}

export const error = (error) => {
  return {
    type: types.ERROR,
    payload: error,
  }
}

export const addCard = (card) => {
  return (dispatch) => {

    // Sets the default value
    if (!card.limit) {
        card.limit = 0;
    } else { 
      // Converts the limit from string to float
      if (typeof card.limit === 'string')
        card.limit = parseFloat(card.limit)
    }

    dispatch(loading(true))

    axios.post('/api/creditCard/add', card)
      .then((response) => {
        dispatch(listCards())
      }).catch((err) => {
        dispatch(loading(false))
        dispatch(error(err))
      })
  }
}

export const listCards = () => {
  return (dispatch) => {
    dispatch(loading(true))
    axios.get('/api/creditCard/getAll')
      .then((response) => {
        dispatch(cardsLoaded(response.data))
        dispatch(loading(false))
      }).catch((err) => {
        dispatch(loading(false))
        dispatch(error(err))
      })
  }
}