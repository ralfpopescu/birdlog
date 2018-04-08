import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: ${(props) => {if (props.today){return '#3498db'}
                            else if (props.dead){return '#FFFFFF'}
                            else {return '#aaaadb'}}}
  border-radius: 8px;
  color: white;
  font-size: 16px;
`;

const Day = ({ day, dead, today }) => (
  <Button dead = {dead} today = {today}>{day}</Button>
)

export default Day
