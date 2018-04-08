import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    padding: 30px 64px;
  }
  100% {
    opacity: 1;
    padding: 15px 32px;
  }
`;


const Button = styled.button`
  background: ${(props) => {if (props.today){return '#ffaadb'}
                            else if (props.dead){return '#FFFFFF'}
                            else {return '#aaaadb'}}}
  border-radius: 2px;
  color: white;
  font-size: 40px;
  padding: 15px 32px;
  font-family: 'Arial Black';
  animation: ${(props) => {return (.05 * props.day)}}s ${fadeIn} ease-out;

  &:hover {
      position: relative;
      transform: scale(2);
      transition: 0.3s ease-out;
    };
`;

const Day = ({ day, dead, today }) => (
  <Button day = {day} dead = {dead} today = {today}>{day}</Button>
)

export default Day
