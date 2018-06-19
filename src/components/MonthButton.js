import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    padding: 20px 40px;
    box-shadow: 50px 50px 50px grey;
  }
  100% {
    opacity: 1;
    padding: 10px 20px;
    box-shadow: 10px 10px 5px white;
  }
`;


const Button = styled.button`
  border-radius: 2px;
  font-size: 20px;
  padding: 10px 20px;
  font-family: 'Courier New';
  animation: 1s ease-out;
  box-shadow: 10px 10px 5px white;

  border-style: solid;
  border-width: 3px;
  transition: 0.3s ease-in-out;
  animation: ${(props) => {return (1)}}s ${fadeIn} ease-out;
  color: #fb9fa4;
  border-color: #fb9fa4;
  border-radius: 10px;
  background: white;

  &:hover {
      position: relative;
      transform: scale(1.5);
      cursor: pointer;
    };

    &:active {
  color: red;
  transform: scale(.8);
}
`;

const MonthButton = ({ month, ...props }) => (
  <Button onClick={() => props.click} month = {month}>{month}</Button>
)

export default MonthButton
