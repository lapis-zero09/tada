/**
 * @flow
 */

import React from 'react'
import styled, { css } from 'styled-components'
import { View, Title, Button, Root, Text, Container, Card, CardItem, Body, Content } from 'native-base'
import { Actions } from 'react-native-router-flux'

const center = css`
  justify-content: center;
  align-items: center;
`
const ContainerWrapper = styled(Container)`
  background: papayawhip;
  ${center};
`

const TitleWrapper = styled(Title)`
  font-size: 50;
  color: palevioletred;
`

const Home = () => (
  <Root>
    <ContainerWrapper>
      <View>
        <TitleWrapper>tada</TitleWrapper>

        <Button bordered info onPress={Actions.PaymentList}>
          <Text>PaymentList</Text>
        </Button>
      </View>
    </ContainerWrapper>
  </Root>
)
export default Home
