/**
 * @flow
 */
// /* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { View, Text, Body, ListItem, Icon } from 'native-base'

const inline = css`
  flex-direction: row;
  align-items: flex-end;
`

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

const PaymentItem = (props) => {
  const { id, placeid, cost } = props
  return (
    <ListItem>
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
                  {id}: {cost}円 @ {placeid}
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
    </ListItem>
  )
}
export default PaymentItem
