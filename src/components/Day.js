import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    padding: 20px 40px;
    box-shadow: 50px 50px 50px white;
  }
  100% {
    opacity: ${(props) => {if (props.weekend)
                              {return .5}
                          else {return 1}} };;
    padding: 10px 20px;
    box-shadow: 10px 10px 5px white;
  }
`;


const Button = styled.button`
  background: ${(props) => {if (props.today){return '#fb958b'}
                            else if (props.weekend){return '#ff9e99'}
                            else {return '#ffffff'}}}
  border-radius: 7px;
  border-color: #ffd4b3;
  color: #ffd4b3;
  font-size: 15px;
  padding: 10px 20px;
  font-family: 'Courier New';
  animation: ${(props) => {return (.05 * props.day)}}s ${fadeIn} ease-out;
  box-shadow: 10px 10px 5px #FFFFFF;
  opacity: ${(props) => {if (props.dead){return .5}}};
  border-style: solid;
  border-width: 3px;
  outline: none;
  transition: 0.3s ease-in-out;

  &:hover {
      position: relative;
      transform: scale(1.5);
      cursor: pointer;
    };

    &:active {
  color: red;
  transition: 0.1s ease-in-out;
  transform: scale(1.3);
}
`;

const Day = ({ day, dead, today, weekend }) => (
  <Button day = {day} dead = {dead} today = {today} weekend = {weekend}>{day}</Button>
)

export default Day
