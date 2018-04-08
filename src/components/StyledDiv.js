import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const StyledDiv = styled.div`
  background: ${(props) => props.color};
  padding: 30px 0px;
  float: ${(props) => props.float ? props.float : 'center'};
  border-style: solid;
  border-width: 3px;
  border-color: #000000;
  width:auto;
  overflow-x: hidden;
`;

export default StyledDiv
