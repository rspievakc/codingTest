import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import CreditCardForm from './components/CreditCardForm'
import CreditCardList from './components/CreditCardList'

class App extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <div>
        <CreditCardForm />
        <CreditCardList />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticate: () => dispatch(authenticate())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
