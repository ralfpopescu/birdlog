import React from 'react'
import styled from 'styled-components'


const RegButton = styled.button` hello my friend
  background: ${(props) => props.color};
  font-size: 15px;
  font-family: 'Arial Black';
  text-transform: uppercase;
  transition: 0.1s ease-in-out;

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
