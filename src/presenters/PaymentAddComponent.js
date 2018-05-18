// @flow

import { Button, Container, Content, Form, Input, Item, Label, Root, Text } from 'native-base'

import React from 'react'
import styled from 'styled-components'

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

const PaymentAddComponent = ({ placeId, cost, submit, handleInput }) => (
  <ContainerWrapper>
    <Content>
      <FormWrapper>
        <ItemWrapper floatingLabel light>
          <Label>placeId</Label>
          <Input
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(placeId) => handleInput(placeId, 'placeId')}
            value={placeId}
          />
        </ItemWrapper>
        <ItemWrapper floatingLabel light>
          <Label>cost</Label>
          <Input
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(cost) => handleInput(cost, 'cost')}
            onSubmitEditing={() => submit(placeId, cost)}
            value={cost}
          />
        </ItemWrapper>
        <Spacer />
        <Button block primary onPress={() => submit(placeId, cost)}>
          <Text>Submit</Text>
        </Button>
      </FormWrapper>
    </Content>
  </ContainerWrapper>
)

export default PaymentAddComponent
