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

const PaymentAddComponent = () => (
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
