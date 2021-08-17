import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Payment from './Payment'
import Text from './Text'

const Main = () => {
  return (
    <Wrapper>
      <Header />
      <Text />
      <Payment />
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.div`
  width: 450px;
  height: auto;
  border-radius: 10px;
  display: grid;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
`
