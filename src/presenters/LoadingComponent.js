// @flow
import React from 'react'
import styled, { css } from 'styled-components'
import { Root, Container, Spinner } from 'native-base'

const center = css`
  justify-content: center;
  align-items: center;
`
const ContainerWrapper = styled(Container)`
  background: papayawhip;
  ${center};
`

const LoadingComponent = () => (
  <Root>
    <ContainerWrapper>
      <Spinner />
    </ContainerWrapper>
  </Root>
)
export default LoadingComponent
