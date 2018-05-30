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
    box-shadow: 10px 10px 5px grey;
  }
`;


const Button = styled.button`
  background: '#aaaadb';
  border-radius: 2px;
  color: black;
  font-size: 28px;
  padding: 10px 20px;
  font-family: 'Arial Black';
  animation: 1s ease-out;
  box-shadow: 10px 10px 5px grey;

  border-style: solid;
  border-width: 3px;
  transition: 0.3s ease-in-out;
  animation: ${(props) => {return (1)}}s ${fadeIn} ease-out;
  color: white;
  border-radius: 10px;
  background: #fb9fa4;

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
  <Button onClick={() => props.click()} month = {month}>{month}</Button>
)

export default MonthButton
