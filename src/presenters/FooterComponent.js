// @flow
import React from 'react'
import { Button, Footer, FooterTab, Icon, Text } from 'native-base'

type Props = { navigation: any }

const FooterComponent = ({ navigation }: Props) => (
  <Footer>
    <FooterTab>
      <Button iconRight onPress={() => navigation.navigate('PaymentAdd')}>
        <Text>add new payment</Text>
        <Icon type="MaterialCommunityIcons" name="plus" />
      </Button>
    </FooterTab>
  </Footer>
)
export default FooterComponent
