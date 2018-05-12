/**
 * @flow
 */

import React, { Component } from 'react'
// import { View, Text } from 'react-native'
import styled, { css } from 'styled-components'
import {
  Container,
  View,
  Header,
  SwipeRow,
  Left,
  Right,
  Title,
  Content,
  List,
  // ListItem,
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
  render() {
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
          <List>
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
                          <Text>365円</Text>
                          <Text>@</Text>
                          <Text>ラーメン屋</Text>
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
                      <Icon style={{ height: 50, fontSize: 50, margin: 10 }} type="Ionicons" name="ios-car-outline" />
                      <View>
                        <InlineGroup>
                          <Text>17368000円</Text>
                          <Text>@</Text>
                          <Text>Tesla</Text>
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
                      <Icon style={{ height: 50, fontSize: 50, margin: 10 }} type="MaterialIcons" name="computer" />
                      <View>
                        <InlineGroup>
                          <Text>200000円</Text>
                          <Text>@</Text>
                          <Text>Apple</Text>
                          <Spacer />
                          <Spacer />
                          <TextLight>
                            <Text note>2018/05/11</Text>
                          </TextLight>
                        </InlineGroup>
                        <InlineGroup>
                          <Tag>this</Tag>
                          <Tag>is</Tag>
                          <Tag>pc</Tag>
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
          </List>
        </Content>
      </ContainerWrapper>
    )
  }
}
