import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Button, Radio, Form, Icon, Loader } from 'semantic-ui-react'
import { Field, FieldArray, reduxForm, change, arrayPush, arrayRemove } from 'redux-form'
import { getFormValues } from 'redux-form/immutable'
import {
  addCard,
} from '../actions'


class CreditCardForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
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
    const formValues = this.props.formValues
    //this.props.saveEvent(formValues)
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, onSubmit, loading } = this.props

    return (
      <div>
        <Form>
          <div>
            <div>
              <div>
                <h1>Credit Card System</h1>
              </div>
              <div>
                <div className="footerRight">
                  <Button className={submitting ? 'submit blue loading' : 'submit blue'} onClick={this.props.handleSubmit(this.onSubmit)}>
                    {this.state.eventId ? 'Submit Edit' : 'Submit Event'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'creditCartForm',
  enableReinitialize: true,
})(CreditCardForm))
