/**
 * @flow
 */

import React, { Component } from 'react'
import { FlatList, ActivityIndicator } from 'react-native'
import styled, { css } from 'styled-components'
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
} from 'native-base'

const inline = css`
  flex-direction: row;
  align-items: flex-end;
`

// const center = css`
//   justify-content: center;
//   align-items: center;
// `

const Tag = styled.Text`
  font-size: 15;
  margin: 5px;
  padding: 3px 5px;
  border: 1px solid palevioletred;
  border-radius: 3px;
`

const InlineGroup = styled.View`
  ${inline};
  margin: 1%;
`
const TextLight = styled.View`
  justifyContent, space-between;
`

const Spacer = styled.Text`
  margin-left: 5%;
`

const SwipeRowWrapper = styled(SwipeRow)``

const ContainerWrapper = styled(Container)`
  background: #f5fcff;
`

export default class App extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = { isLoading: true }
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
        console.error(error)
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
          <ActivityIndicator size="large" color="#0000ff" />
        </ContainerWrapper>
      )
    }

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
            renderRow={(item) => (
              <SwipeRowWrapper
                leftOpenValue={75}
                rightOpenValue={-75}
                left={
                  <Button warning onPress={() => alert('Edit')}>
                    <Icon active type="FontAwesome" name="edit" />
                  </Button>
                }
                body={
                  <Body>
                    <View>
                      <InlineGroup>
                        <Icon
                          style={{ height: 50, fontSize: 50, margin: 10 }}
                          type="MaterialCommunityIcons"
                          name="food-fork-drink"
                        />
                        <View>
                          <InlineGroup>
                            <Text>
                              {item.id}: {item.cost}円 @ {item.placeid}
                            </Text>
                            <Spacer />
                            <Spacer />
                            <TextLight>
                              <Text note>2018/05/11</Text>
                            </TextLight>
                          </InlineGroup>
                          <InlineGroup>
                            <Tag>this</Tag>
                            <Tag>is</Tag>
                            <Tag>fucking</Tag>
                            <Tag>tag</Tag>
                            <Tag>shit</Tag>
                            <Tag>!</Tag>
                          </InlineGroup>
                        </View>
                      </InlineGroup>
                    </View>
                  </Body>
                }
                right={
                  <Button danger onPress={() => alert('Trash')}>
                    <Icon active name="trash" />
                  </Button>
                }
              />
            )}
          />
        </Content>
      </ContainerWrapper>
    )
  }
}
