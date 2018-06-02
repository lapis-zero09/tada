// @flow

import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'
import { Root } from 'native-base'

import HomeComponent from './src/presenters/HomeComponent'
import PaymentAdd from './src/containers/PaymentAddContainer'
import PaymentList from './src/containers/PaymentListContainer'

const RootStack = createStackNavigator(
  {
    Home: { screen: HomeComponent },
    PaymentList: { screen: PaymentList },
    PaymentAdd: { screen: PaymentAdd },
  },
  { initialRouteName: 'Home' },
)

export default class App extends Component<{}> {
  render() {
    return (
      <Root>
        <RootStack />
      </Root>
    )
  }
}
