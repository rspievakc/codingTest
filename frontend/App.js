import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { 
  Loader, 
  Dimmer, 
  Segment,
  Grid,
  Header,
} from 'semantic-ui-react'
import configureStore, { history } from './configureStore'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import Main from './components/Main'
import CreditCardForm from './components/CreditCardForm'
import CreditCardList from './components/CreditCardList'

import 'semantic-ui-css/semantic.min.css'
import './styles/Wrapper.scss'

const store = configureStore()

/**
 * This class implements the entry point for the Credit Card System.
 * It's main pourpose is to inject the redux store
 * 
 * @author Rodrigo S. Cavalcanti
 * 
 */
class App extends Component {
  render() {
    const { loading, error } = this.props
    return (
        <Provider store={store}>
          <Main />
        </Provider>
    )
  }
}

export default App
