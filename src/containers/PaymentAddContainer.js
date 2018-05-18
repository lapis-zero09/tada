// @flow

import { ActionSheet, Root, Toast } from 'native-base'
import React, { Component } from 'react'

import { Actions } from 'react-native-router-flux'
import PaymentAddComponent from '../presenters/PaymentAddComponent'

export default class PaymentAddContainer extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = { placeId: null, cost: null, showToast: true }
    this.handleInput = this.handleInput.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentDidMount() {
    Toast.toastInstance = null
    ActionSheet.actionsheetInstance = null
  }

  handleInput({ input, inputType }) {
    if (inputType === 'cost') {
      this.setState({
        cost: input,
      })
    } else if (inputType === 'placeId') {
      this.setState({
        placeId: input,
      })
    }
  }

  submit(placeId, cost) {
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
      Actions.PaymentList(() => Actions.refresh)
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
      // <Root>
      //   <ContainerWrapper>
      //     <Content>
      //       <FormWrapper>
      //         <ItemWrapper
      //           floatingLabel
      //           light
      //           ref={(item) => {
      //             this.placeId = item
      //           }}>
      //           <Label>placeId</Label>
      //           <Input
      //             getRef={(input) => {
      //               this.placeId = input
      //             }}
      //             returnKeyType="next"
      //             keyboardType="email-address"
      //             autoCapitalize="none"
      //             autoCorrect={false}
      //             onChangeText={(placeId) => this.setState({ placeId })}
      //             onSubmitEditing={() => this.submit()}
      //             value={this.state.placeId}
      //           />
      //         </ItemWrapper>
      //         <ItemWrapper
      //           floatingLabel
      //           light
      //           ref={(item) => {
      //             this.cost = item
      //           }}>
      //           <Label>cost</Label>
      //           <Input
      //             getRef={(input) => {
      //               this.cost = input
      //             }}
      //             returnKeyType="next"
      //             keyboardType="email-address"
      //             autoCapitalize="none"
      //             autoCorrect={false}
      //             onChangeText={(cost) => this.setState({ cost })}
      //             onSubmitEditing={() => this.submit()}
      //             value={this.state.cost}
      //           />
      //         </ItemWrapper>
      //         <Spacer />
      //         <Button block primary onPress={() => this.submit()}>
      //           <Text>Submit</Text>
      //         </Button>
      //       </FormWrapper>
      //     </Content>
      //   </ContainerWrapper>
      // </Root>
    )
  }
}
