/**
 * This class implements the credit card input form.
 * 
 * @author Rodrigo S. Cavalcanti
 * 
 */
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

/**
 * Common validation helpers
 */
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

/**
 * Validates the form inputs
 * It requires a promise as the return.
 * This validation will only happen during the form submition
 */
const asyncValidate = values => {
  return new Promise((resolve, reject) => {
    const errors = {}
    if (!values.name) {
      errors.name = 'This field is required.'
    } 
    if (!values.number) {
      errors.number = 'This field is required.'
    }
    else if (!validateCreditCard(values.number)) {
        errors.number = 'Invalid credit card number.'
    }
    if (!values.limit) {
      errors.limit = 'This field is required.'
    }
    if (Object.keys(errors).length !== 0 || errors.constructor !== Object) {
      reject(errors)
    } else {
      resolve();
    }
  })
}

class CreditCardForm extends Component {
  constructor(props) {
    super(props)
  }

  onSubmit = (values) => {
    this.props.addCard(values)
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, onSubmit, loading } = this.props

    return (
        <Form>
          <Segment>
            <Header as='h3' textAlign='left' >Add</Header>
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
            <div style={{textAlign: 'right'}}>
              <Button disabled={pristine || submitting} className="submit blue" onClick={handleSubmit(this.onSubmit)}>
                Add
              </Button>
              <Button disabled={pristine || submitting} onClick={reset}>
                Reset
              </Button>
            </div>
          </Segment>
        </Form>
    )
  }
}

// Redux boiler plate
const mapStateToProps = (state) => {
  return {
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
  asyncValidate,
  asyncBlurFields: [],
  enableReinitialize: true,
})(CreditCardForm))
