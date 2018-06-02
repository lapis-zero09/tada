// @flow

import React from 'react'
import styled, { css } from 'styled-components'
import { View, Title, Button, Text, Container } from 'native-base'

type Props = { navigation: any }

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

const HomeComponent = ({ navigation }: Props) => (
  <ContainerWrapper>
    <View>
      <TitleWrapper>tada</TitleWrapper>
      <Button bordered info onPress={() => navigation.navigate('PaymentList')}>
        <Text>PaymentList</Text>
      </Button>
    </View>
  </ContainerWrapper>
)
export default HomeComponent
