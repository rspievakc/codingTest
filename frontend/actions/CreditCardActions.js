import axios from 'axios'
import { push } from 'react-router-redux'

export const types = {
  
  ADD_CARD: "ADD_CARD",
  LIST_CARDS: "LIST_CARDS",
  CARDS_LOADED: "CARDS_LOADED",

  LOADING: "LOADING",
  ERROR: "ERROR",

} 

export const loading = (value) => {
  return {
    type: types.LOADING,
    payload: value,
  }
}

export const cardsLoaded = (cards) => {
  return {
    type: types.ERROR,
    payload: cards,
  }
}

export const error = (error) => {
  return {
    type: types.ERROR,
    payload: error,
  }
}

export const addCard = (name, number, limit, balance) => {
  return (dispatch) => {
    const data = {
      name,
      number,
      limit,
      balance
    }

    dispatch(loading(true))

    axios.post('/api/creditCard/add', data)
      .then((response) => {
        dispatch(loading(false))
        dispatch(cardsLoaded(response.data))
      }).catch((error) => {
        dispatch(loading(false))
        dispatch(error(error))
      })
  }
}

export const listCards = () => {
  dispatch(loading(true))
  return (dispatch) => {
    axios.get('/api/creditCard/list')
      .then((response) => {
        dispatch(loading(false))
        dispatch(cardsLoaded(response.data))
      }).catch((error) => {
        dispatch(loading(false))
        dispatch(error(error))
      })
  }
}