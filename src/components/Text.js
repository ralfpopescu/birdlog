import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledText = styled.text`
  font-size: 30px;
  font-family: 'Arial Black';
  text-transform: uppercase;
  color: white;
  animation: 1s ${fadeIn} ease-out;

`;

const Text = ({ text, size }) => (
  <StyledText>{text}</StyledText>
)

export default Text
