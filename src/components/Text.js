import React from 'react'
import styled from 'styled-components'

const Text = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <h1>Order Summary</h1>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Text

const Wrapper = styled.div`
  width: 100%;
`
const ContentWrapper = styled.div`
  width: 70%;
  display: grid;
  justify-content: center;
  margin: 0 auto;

  > h1 {
    text-align: center;
    padding: 12px 0;
    font-weight: 700;
    font-size: 30px;
    color: rgba(36, 45, 81);
  }
  > p {
    text-align: center;
    color: rgba(155, 163, 183);
    padding: 12px 0;
  }
`
