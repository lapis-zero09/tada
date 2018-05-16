// @flow

import React from 'react'
import styled from 'styled-components'
import PaymentItemComponent from './PaymentItemComponent'
import FooterComponent from '../presenters/FooterComponent'
import { Root, Container, Content, List, Button, Icon } from 'native-base'

const ContainerWrapper = styled(Container)`
  background: papayawhip;
`

const PaymentListComponent = ({ datasrc, deletePayment }) => (
  <Root>
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
      <FooterComponent />
    </ContainerWrapper>
  </Root>
)

export default PaymentListComponent
