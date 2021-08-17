import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Wrapper>
      <HeaderImage src='/images/illustration-hero.svg' />
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`
const HeaderImage = styled.img`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`
