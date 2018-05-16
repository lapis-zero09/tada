// @flow
import React from 'react'
import styled, { css } from 'styled-components'
import { View, Text, Body, ListItem, Icon } from 'native-base'
import TagComponent from './TagComponent'

const inline = css`
  flex-direction: row;
  align-items: flex-end;
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

const PaymentItem = ({ id, placeId, cost }) => (
  <ListItem>
    <Body>
      <View>
        <InlineGroup>
          <Icon style={{ height: 50, fontSize: 50, margin: 10 }} type="MaterialCommunityIcons" name="food-fork-drink" />
          <View>
            <InlineGroup>
              <Text>
                {id}: {cost}円 @ {placeId}
              </Text>
              <Spacer />
              <Spacer />
              <TextLight>
                <Text note>2018/05/11</Text>
              </TextLight>
            </InlineGroup>
            <TagComponent />
          </View>
        </InlineGroup>
      </View>
    </Body>
  </ListItem>
)
export default PaymentItem
