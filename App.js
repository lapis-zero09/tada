/**
 * @flow
 */
// /* eslint-disable */

import React, { Component } from 'react'
import { ListView } from 'react-native'
import styled, { css } from 'styled-components'
import PaymentItem from './src/component/PaymentItem'
import {
  Root,
  Container,
  Toast,
  Header,
  Left,
  Right,
  Title,
  Content,
  List,
  Body,
  Button,
  Icon,
  Spinner,
} from 'native-base'

const inline = css`
  flex-direction: row;
  align-items: flex-end;
`

const ContainerWrapper = styled(Container)`
  background: #f5fcff;
`

export default class App extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = { isLoading: true }
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

  delete(id) {
    fetch('http://localhost:8080/api/v1/payments/' + id, {
      method: 'DELETE',
    })
      .then(() => {
        this.setState({
          dataSource: this.state.dataSource.filter((item, index) => {
            if (item.id !== id) return true
          }),
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
      return (
        <ContainerWrapper>
          <Header>
            <Left>
              <Button transparent>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>tada</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon type="FontAwesome" name="plus" />
              </Button>
            </Right>
          </Header>
          <Spinner />
        </ContainerWrapper>
      )
    }

    return (
      <Root>
        <ContainerWrapper>
          <Header>
            <Left>
              <Button transparent>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>tada</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon type="FontAwesome" name="plus" />
              </Button>
            </Right>
          </Header>
          <Content>
            <List
              dataSource={this.ds.cloneWithRows(this.state.dataSource)}
              renderRow={(item) => <PaymentItem {...item} />}
              renderLeftHiddenRow={(item) => (
                <Button full warning onPress={() => alert(item.id)}>
                  <Icon active type="FontAwesome" name="edit" />
                </Button>
              )}
              renderRightHiddenRow={(item) => (
                <Button full danger onPress={() => this.delete(item.id)}>
                  <Icon active name="trash" />
                </Button>
              )}
              leftOpenValue={75}
              rightOpenValue={-75}
            />
          </Content>
        </ContainerWrapper>
      </Root>
    )
  }
}
