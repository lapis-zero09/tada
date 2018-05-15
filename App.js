/**
 * @flow
 */
// /* eslint-disable */

import React, { Component } from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import { Root } from 'native-base'

import Home from './src/component/Home'
import PaymentList from './src/component/PaymentList'
import PaymentAdd from './src/component/PaymentAdd'

export default class App extends Component<{}> {
  render() {
    return (
      <Root>
        <Router>
          <Scene key="root">
            <Scene key="Home" initial component={Home} title="Home" />
            <Scene key="PaymentList" component={PaymentList} title="PaymentList" />
            <Scene key="PaymentAdd" component={PaymentAdd} title="PaymentAdd" />
          </Scene>
        </Router>
      </Root>
    )
  }
}
