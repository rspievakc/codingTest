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
import configureStore, { history } from '../configureStore'

import CreditCardForm from './CreditCardForm'
import CreditCardList from './CreditCardList'

import 'semantic-ui-css/semantic.min.css'
import '../styles/Wrapper.scss'

/**
 * This class implements the wrapper layout for the credit card system.
 * It injects the required scss (CSS) files and tracks the state
 * for the loading and error store properties.
 * 
 * @author Rodrigo S. Cavalcanti
 * 
 */
class Main extends Component {
  render() {
    const { loading, error } = this.props
    return (
      <div className="wrapper">
        {loading ? (
        <Dimmer active inverted>
          <Loader size='large'>Loading</Loader>
        </Dimmer>
        ) : null}
        <div className="headerContainer">
          <Header as='h1' textAlign='center' >Credit Card System</Header>
          <CreditCardForm />
        </div>
        <CreditCardList className="mainContainer"/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { loading, error } = state.creditCard
  return {
    loading,
    error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
