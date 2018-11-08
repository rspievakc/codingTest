import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Button, Radio, Form, Icon, Loader, Table, Label, Container } from 'semantic-ui-react'
import { Field, FieldArray, reduxForm, change, arrayPush, arrayRemove } from 'redux-form'
import { getFormValues } from 'redux-form/immutable'
import {
  addCard,
} from '../actions'


class CreditCardList extends Component {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    const { cards } = this.props

    return (
      <Container>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center">Name</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Card Number</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Balance</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Limit</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {cards.map((card)=> {
              return (
                <Table.Row key={card.id}>
                <Table.Cell textAlign="center">
                  {card.name}
                </Table.Cell>
                <Table.Cell textAlign="center">
                  {card.number}
                </Table.Cell>
                <Table.Cell textAlign="center">
                  &pound;{card.balance}
                </Table.Cell>
                <Table.Cell textAlign="center">
                  &pound;{card.limit}
                </Table.Cell>
              </Table.Row>
              )})}
          </Table.Body>
        </Table>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { cards } = state.creditCard
  return {
    cards,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'creditCartForm',
  enableReinitialize: true,
})(CreditCardList))
