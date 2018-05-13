/**
 * @flow
 */
// /* eslint-disable */

import React, { Component } from 'react'
import styled from 'styled-components'
import { Root, Container, Content, Form, Item, Input, Label, Button, Text, Toast } from 'native-base'
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

export default class PaymentAdd extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = { placeid: null, cost: null }
  }

  submit() {
    const list = {
      placeid: parseInt(this.state.placeid, 10),
      cost: parseInt(this.state.cost, 10),
    }

    if (Number.isNaN(list.placeid) || Number.isNaN(list.cost)) {
      Toast.show({
        text: 'te',
        buttonText: 'Okay',
        type: 'danger',
      })
      alert('input must be integer')
      this.setState({ placeid: '', cost: '' })
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
            alert('Ooops! Something went wrong...')
            this.setState({ placeid: '', cost: '' })
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
                  this.placeid = item
                }}>
                <Label>placeid</Label>
                <Input
                  getRef={(input) => {
                    this.placeid = input
                  }}
                  returnKeyType="next"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={(placeid) => this.setState({ placeid })}
                  onSubmitEditing={() => this.submit()}
                  value={this.state.placeid}
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
