import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { 
  Button, 
  Radio, 
  Form, 
  Icon, 
  Loader,
  Segment,
  Container,
  Header,
} from 'semantic-ui-react'
import { 
  Field, 
  FieldArray, 
  reduxForm, 
  change, 
  arrayPush, 
  arrayRemove 
} from 'redux-form'
import { getFormValues } from 'redux-form/immutable'
import {
  addCard,
} from '../actions'
import SemanticFormField from "../utility/SemanticFormField"
import validateCreditCard from "../utility/CreditCardValidator"

const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength19 = maxLength(19)
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(18)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined
const validCreditCardNumber = value => value && !validateCreditCard(value) ?
  'Invalid credit card number' : undefined

const validate = values => {
    const errors = {}
    if (!values.name) {
      errors.name = 'Required'
    } 
    if (!values.number) {
      errors.number = 'Required'
    }
    else if (!validCreditCardNumber(values.number)) {
        errors.number = 'Invalid Number'
    }
    if (!values.limit) {
      errors.limit = 'Required'
    }
    return errors
  }

class CreditCardForm extends Component {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    /*if (nextProps.match.params.eventId && this.state.eventId !== nextProps.match.params.eventId) {
      this.setState({ eventId: nextProps.match.params.eventId })
      this.props.editEvent(nextProps.match.params.eventId)
    }
    const formValues = nextProps.formValues
    if (formValues && formValues.place && formValues.place.id && this.state.placeId !== formValues.place.id) {
      this.setState({ placeId: formValues.place.id })
      this.loadPlaceDetails(formValues.place.id)
    }*/
  }

  onSubmit = (values) => {
    console.log(values)
    this.props.addCard(values)
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, onSubmit, loading } = this.props

    return (
      <div>e
        <Form>
          <Container>
            <Header as='h1' textAlign='center' >Credit Card System</Header>
            <Field name="name" 
              label="Name"
              component={SemanticFormField}
              as={Form.Input}
              placeholder="Name"
              required
            />
            <Field name="number"
              label="Card Number"
              component={SemanticFormField}
              as={Form.Input}
              placeholder="Card Number"
              required
              pattern="[0-9]*"
              type="number"
            />
            <Field name="limit" 
              label="Limit"
              component={SemanticFormField}
              as={Form.Input}
              placeholder="Limit"
              required
              pattern="[0-9]*"
              type="number"
            />
            <Button className={submitting ? 'submit blue loading' : 'submit blue'} onClick={handleSubmit(this.onSubmit)}>
              Add
            </Button>
            <Button className={submitting ? 'submit blue loading' : 'submit blue'} onClick={reset}>
              Reset
            </Button>            
          </Container>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { user } = state
  return {
    user,
    initialValues: {
    },
    formValues: getFormValues('creditCartForm')(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: card => dispatch(addCard(card)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'creditCartForm',
  validate,
  enableReinitialize: true,
})(CreditCardForm))
