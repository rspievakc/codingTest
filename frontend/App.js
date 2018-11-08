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
import CreditCardForm from './components/CreditCardForm'
import CreditCardList from './components/CreditCardList'
import './styles/Wrapper.scss'

class App extends Component {
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
    authenticate: () => dispatch(authenticate())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
