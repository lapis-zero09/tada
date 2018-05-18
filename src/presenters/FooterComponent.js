// @flow

import { Button, Footer, FooterTab, Icon, Text } from 'native-base'

import { Actions } from 'react-native-router-flux'
import React from 'react'

const FooterComponent = () => (
  <Footer>
    <FooterTab>
      <Button iconRight onPress={Actions.PaymentAdd}>
        <Text>add new payment</Text>
        <Icon type="MaterialCommunityIcons" name="plus" />
      </Button>
    </FooterTab>
  </Footer>
)
export default FooterComponent
