// @flow

import React from 'react'
import { Button, Icon, Text, Footer, FooterTab } from 'native-base'
import { Actions } from 'react-native-router-flux'

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
