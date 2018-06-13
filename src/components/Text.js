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
  font-size: ${(props) => props.size}px;
  font-family: 'Courier New';
  text-transform: uppercase;
  color: white;
  animation: 1s ${fadeIn} ease-out;

`;

const Text = ({ text, size=30 }) => (
  <StyledText size={size}>{text}</StyledText>
)

export default Text
