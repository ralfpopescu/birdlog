import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    padding: 30px 64px;
    box-shadow: 50px 50px 50px grey;
  }
  100% {
    opacity: 1;
    padding: 15px 32px;
    box-shadow: 10px 10px 5px grey;
  }
`;


const Button = styled.button`
  background: '#aaaadb';
  border-radius: 2px;
  color: black;
  font-size: 40px;
  padding: 15px 32px;
  font-family: 'Arial Black';
  animation: 1s ease-out;
  box-shadow: 10px 10px 5px grey;

  border-style: solid;
  border-width: 3px;
  border-color: #000000;
  transition: 0.3s ease-in-out;

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

const MonthButton = ({ month }) => (
  <Button>{month}</Button>
)

export default MonthButton
