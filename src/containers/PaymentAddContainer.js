// @flow

import React, { Component } from 'react'
import styled from 'styled-components'
import { Root, Container, Content, Form, Item, Input, Label, Button, Text, Toast, ActionSheet } from 'native-base'
import { Actions } from 'react-native-router-flux'

const ContainerWrapper = styled(Container)`
  background: papayawhip;
`

const Spacer = styled.Text`
  margin: 2%;
`

const FormWrapper = styled(Form)`
  margin: 2%;
`

const ItemWrapper = styled(Item)`
  margin: 2%;
`

export default class PaymentAddContainer extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = { placeId: null, cost: null, showToast: true }
  }

  componentDidMount() {
    Toast.toastInstance = null
    ActionSheet.actionsheetInstance = null
  }

  submit() {
    const list = {
      placeId: parseInt(this.state.placeId, 10),
      cost: parseInt(this.state.cost, 10),
    }

    if (Number.isNaN(list.placeId) || Number.isNaN(list.cost)) {
      Toast.show({
        text: 'Input must be integer',
        buttonText: 'Okay',
        type: 'danger',
      })
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
      <Root>
        <ContainerWrapper>
          <Content>
            <FormWrapper>
              <ItemWrapper
                floatingLabel
                light
                ref={(item) => {
                  this.placeId = item
                }}>
                <Label>placeId</Label>
                <Input
                  getRef={(input) => {
                    this.placeId = input
                  }}
                  returnKeyType="next"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={(placeId) => this.setState({ placeId })}
                  onSubmitEditing={() => this.submit()}
                  value={this.state.placeId}
                />
              </ItemWrapper>
              <ItemWrapper
                floatingLabel
                light
                ref={(item) => {
                  this.cost = item
                }}>
                <Label>cost</Label>
                <Input
                  getRef={(input) => {
                    this.cost = input
                  }}
                  returnKeyType="next"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={(cost) => this.setState({ cost })}
                  onSubmitEditing={() => this.submit()}
                  value={this.state.cost}
                />
              </ItemWrapper>
              <Spacer />
              <Button block primary onPress={() => this.submit()}>
                <Text>Submit</Text>
              </Button>
            </FormWrapper>
          </Content>
        </ContainerWrapper>
      </Root>
    )
  }
}
