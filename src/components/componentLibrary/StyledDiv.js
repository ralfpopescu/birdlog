import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const StyledDiv = styled.div`
  background: ${(props) => props.color};
  text-align: center;
  padding: 10px 0px;
  float: ${(props) => props.float ? props.float : 'center'};
  border-color: #000000;
  width:auto;
  overflow-x: hidden;
`;

export default StyledDiv
