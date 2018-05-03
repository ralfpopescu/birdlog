import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const StyledText = styled.text`
  font-size: 40px;
  font-family: 'Arial Black';
  text-transform: uppercase;

`;

const Text = ({ text, size }) => (
  <StyledText>{text}</StyledText>
)

export default Text
