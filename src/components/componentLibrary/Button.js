import React from 'react'
import styled from 'styled-components'


const RegButton = styled.button`
  background: ${(props) => props.color};
  font-size: 15px;
  font-family: 'Courier New';
  text-transform: uppercase;
  transition: 0.1s ease-in-out;
  border-radius: 10px;
  color: white;
  border-style: solid;
  border-width: 3px;
  border-color: white;
  background: #fb9fa4;
  outline: none;

  &:hover {
      position: relative;
      transform: scale(1.2);
      cursor: pointer;
    };
`

const Button = ({ children, onClick, color }) => (
  <RegButton color={color} onClick={onClick}>{children}</RegButton>
)


export default Button
