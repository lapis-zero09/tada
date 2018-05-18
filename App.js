// @flow

import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'

import HomeComponent from './src/presenters/HomeComponent'
import PaymentAdd from './src/containers/PaymentAddContainer'
import PaymentList from './src/containers/PaymentListContainer'
import { Root } from 'native-base'

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
