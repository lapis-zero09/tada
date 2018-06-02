// @flow
import React, { Component } from 'react'
import { ActionSheet, Toast } from 'native-base'

import PaymentAddComponent from '../presenters/PaymentAddComponent'

type Props = { navigation: any }

export default class PaymentAddContainer extends Component<Props> {
  static navigationOptions = {
    title: 'PaymentAdd',
  }

  constructor(props) {
    super(props)
    this.state = { placeId: null, cost: null }
    this.handleInput = this.handleInput.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentWillUnmount() {
    Toast.toastInstance = null
    ActionSheet.actionsheetInstance = null
  }

  handleInput(input: string, inputType: string) {
    if (inputType === 'cost') {
      this.setState({ cost: input })
      return this.state.cost
    } else if (inputType === 'placeId') {
      this.setState({ placeId: input })
      return this.state.input
    }
  }

  submit(placeId: string, cost: string) {
    const list = {
      placeId: parseInt(placeId, 10),
      cost: parseInt(cost, 10),
    }

    if (Number.isNaN(list.placeId) || Number.isNaN(list.cost)) {
      Toast.show({
        text: 'Input must be integer',
        buttonText: 'Okay',
        type: 'danger',
      })
      // alert('ok')
      this.setState({ placeId: '', cost: '' })
    } else {
      fetch('http://localhost:8080/api/v1/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(list),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (typeof responseJson.message !== 'undefined') {
            Toast.show({
              text: 'Ooops! Something went wrong...',
              buttonText: 'Okay',
              type: 'danger',
            })
            this.setState({ placeId: '', cost: '' })
          }
          Toast.show({
            text: 'Successfully Make payment!',
            buttonText: 'Okay',
            type: 'success',
          })
        })
        .catch((error) => {
          Toast.show({
            text: 'Make item is Failed!',
            buttonText: 'Okay',
            type: 'danger',
          })
        })
      // Actions.PaymentList(() => Actions.refresh)
      this.props.navigation.navigate('PaymentList')
    }
  }

  render() {
    return (
      <PaymentAddComponent
        placeId={this.state.placeId}
        cost={this.state.cost}
        submit={this.submit}
        handleInput={this.handleInput}
      />
    )
  }
}
