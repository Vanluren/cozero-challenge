import React, { ReactElement } from 'react'
import styled, { keyframes } from 'styled-components'

const LoadingSpinner = (): ReactElement => {
  return (
    <SpinnerWrapper>
      <Bouncer orderNum={1} />
      <Bouncer orderNum={2} />
      <Bouncer />
    </SpinnerWrapper>
  )
}

const SpinnerWrapper = styled.div.attrs({
  className: 'h-auto pb-12 py-12',
})`
  margin: 100px auto 0;
  width: 70px;
  text-align: center;
`

const BounceAnimation = keyframes`
  0%, 80%, 100% { 
    transform: scale(0);
  } 40% { 
    transform: scale(1.0);
  }
`

const Bouncer = styled.div.attrs({ className: 'bg-gray-600' })<{
  orderNum?: number
}>`
  width: 18px;
  height: 18px;
  border-radius: 100%;
  display: inline-block;
  animation: ${BounceAnimation} 1.4s infinite ease-in-out both;
  animation-delay: ${({ orderNum }) => (orderNum === 1 ? '-0.32s' : '-0.16s')};
`

export default LoadingSpinner
