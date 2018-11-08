import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { 
  Button, 
  Radio, 
  Form, 
  Icon, 
  Loader, 
  Table, 
  Label, 
  Container,
  Header,
  Segment,
} from 'semantic-ui-react'
import { 
  Field,
  FieldArray,
  reduxForm,
  change,
  arrayPush,
  arrayRemove,
} from 'redux-form'
import { getFormValues } from 'redux-form/immutable'
import {
  listCards,
} from '../actions'


class CreditCardList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
      this.props.listCards();
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    const { cards } = this.props

    return (
      <Segment className={this.props.className}>
        <Header as='h3' textAlign='left' >Existing cards</Header>
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
      </Segment>
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
    listCards: () => dispatch(listCards()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'creditCartForm',
  enableReinitialize: true,
})(CreditCardList))
