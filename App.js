/**
 * @flow
 */
/* eslint-disable */

import React, { Component } from 'react'
import { FlatList } from 'react-native'
import styled, { css } from 'styled-components'
import PaymentItem from './src/component/PaymentItem'
import {
  Container,
  View,
  Separator,
  Header,
  SwipeRow,
  Left,
  Right,
  Title,
  Content,
  List,
  ListItem,
  Text,
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
    // this._delete = this._delete.bind(this)
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

  _delete = (id) => () => {
    fetch('http://localhost:8080/api/v1/payments/' + id, {
      method: 'DELETE',
    })
      .then(() => {
        this.setState({
          dataSource: this.state.dataSource.filter(function(item, index) {
            if (item.id != id) return true
          }),
        })
      })
      .catch((error) => {
        alert(error)
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

    // debugger
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
        <Content>
          <List
            dataArray={this.state.dataSource}
            renderRow={(item) => <PaymentItem onDelete={this._delete(item.id)} {...item} />}
          />
        </Content>
      </ContainerWrapper>
    )
  }
}
