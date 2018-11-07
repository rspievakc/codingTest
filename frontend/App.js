import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

class App extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <div>
        Teste
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
