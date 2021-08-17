import React from 'react'
import styled from 'styled-components'

const Payment = () => {
  return (
    <Wrapper>
      <AnnaulPlan>
        <img src='/images/icon-music.svg' alt='' />
        <TextWrapper>
          <h1>Annaul Plan</h1>
          <p>$59.99/year</p>
        </TextWrapper>
        <a href='#'>Change</a>
      </AnnaulPlan>
      <ProceedBtn>Proceed to Payment</ProceedBtn>
      <CancelOrderBtn>Cancel Order</CancelOrderBtn>
    </Wrapper>
  )
}

export default Payment

const Wrapper = styled.div`
  display: grid;
`
const AnnaulPlan = styled.div`
  width: 70%;
  padding: 18px 12px;
  border-radius: 10px;
  background-color: rgba(248, 249, 254);
  display: grid;
  grid-template-columns: auto auto auto;
  align-content: center;
  align-items: center;
  margin: 10px auto;
  > a {
    text-align: center;
    text-decoration: underline;
  }
`
const TextWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 5px;
  > h1 {
    font-weight: 700;
  }
`
const ProceedBtn = styled.button`
  width: 70%;
  margin: 15px auto;
  padding: 15px 0;
  border-radius: 10px;
  border: none;
  color: white;
  background-color: rgba(56, 42, 225);
  font-weight: 600;
  box-shadow: 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
`
const CancelOrderBtn = styled.button`
  font-weight: 600;
  font-size: 16px;
  background-color: white;
  border: none;
  padding-bottom: 20px;
  border-radius: 10px;
`
