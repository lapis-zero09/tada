// @flow
import React from 'react'
import styled, { css } from 'styled-components'

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
const TagComponent = () => (
  <InlineGroup>
    <Tag>this</Tag>
    <Tag>is</Tag>
    <Tag>fucking</Tag>
    <Tag>tag</Tag>
    <Tag>shit</Tag>
    <Tag>!</Tag>
  </InlineGroup>
)

export default TagComponent
