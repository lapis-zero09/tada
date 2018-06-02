// @flow
import React from 'react'
import styled from 'styled-components'
import { Container, Content, List, Button, Icon } from 'native-base'

import PaymentItemComponent from './PaymentItemComponent'
import FooterComponent from '../presenters/FooterComponent'

type Props = {
  navigation: any,
  datasrc: any,
  deletePayment: (id: number) => void,
}

const ContainerWrapper = styled(Container)`
  background: papayawhip;
`

const PaymentListComponent = ({ datasrc, deletePayment, navigation }: Props) => (
  <ContainerWrapper>
    <Content>
      <List
        dataSource={datasrc}
        renderRow={(item) => <PaymentItemComponent {...item} />}
        renderLeftHiddenRow={(item) => (
          <Button full warning onPress={() => alert(item.id)}>
            <Icon active type="FontAwesome" name="edit" />
          </Button>
        )}
        renderRightHiddenRow={(item) => (
          <Button full danger onPress={() => deletePayment(item.id)}>
            <Icon active name="trash" />
          </Button>
        )}
        leftOpenValue={75}
        rightOpenValue={-75}
      />
    </Content>
    <FooterComponent navigation={navigation} />
  </ContainerWrapper>
)

export default PaymentListComponent
