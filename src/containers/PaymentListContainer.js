// @flow
import React, { Component } from 'react'
import { ListView } from 'react-native'
import { Toast, ActionSheet } from 'native-base'

import PaymentListComponent from '../presenters/PaymentListComponent'
import LoadingComponent from '../presenters/LoadingComponent'

type Props = { navigation: any }

type State = {
  isLoading: boolean,
  dataSource: any,
}

export default class PaymentListContainer extends Component<Props, State> {
  ds: ListView.DataSource
  deletePayment: (id: number) => void

  static navigationOptions = {
    title: 'PaymentList',
  }

  constructor(props: Props) {
    super(props)
    this.state = {
      isLoading: true,
      dataSource: null,
    }
    this.deletePayment = this.deletePayment.bind(this)
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
  }

  componentDidMount() {
    return fetch('http://localhost:8080/api/v1/payments')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          () => {},
        )
      })
      .catch((error) => {
        alert(error)
      })
  }

  componentWillUnmount() {
    Toast.toastInstance = null
    ActionSheet.actionsheetInstance = null
  }

  deletePayment(id: number) {
    fetch('http://localhost:8080/api/v1/payments/' + id, {
      method: 'DELETE',
    })
      .then(() => {
        this.setState({
          dataSource: this.state.dataSource.filter((item, index) => item.id !== id),
        })
        Toast.show({
          text: 'Successfully Delete item id ' + id + '!',
          buttonText: 'Okay',
          type: 'success',
        })
      })
      .catch((error) => {
        Toast.show({
          text: 'Delete item id ' + id + ' is Failed!',
          buttonText: 'Okay',
          type: 'danger',
        })
      })
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingComponent />
    }

    return (
      <PaymentListComponent
        datasrc={this.ds.cloneWithRows(this.state.dataSource)}
        deletePayment={this.deletePayment}
        navigation={this.props.navigation}
      />
    )
  }
}
