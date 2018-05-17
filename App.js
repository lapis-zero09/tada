// @flow

import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import { Root } from 'native-base'

import HomeComponent from './src/presenters/HomeComponent'
import PaymentList from './src/containers/PaymentListContainer'
import PaymentAdd from './src/containers/PaymentAddContainer'

export default class App extends Component<{}> {
  render() {
    return (
      <Root>
        <Router>
          <Scene key="root">
            <Scene key="Home" initial component={HomeComponent} title="Home" />
            <Scene key="PaymentList" component={PaymentList} title="PaymentList" />
            <Scene key="PaymentAdd" component={PaymentAdd} title="PaymentAdd" />
          </Scene>
        </Router>
      </Root>
    )
  }
}
