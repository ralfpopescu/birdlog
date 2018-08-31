import React, { Component } from 'react'

import styled, { keyframes } from 'styled-components'
import Text from '../../../componentLibrary/Text'
import { months } from '../../../../services/dataModels'
import { BrowserRouter, HashRouter, Switch, Route, Link } from 'react-router-dom'

const Note = ({ month, day }) => {
  const dateText = `${months[month - 1]} ${day}`
  const Title = () => <Text text = {dateText} />

  const TextArea = styled.textarea`
    display: inline-block;
    height: 150px;
    width: 40%;
    font-size: 1rem;
    border-radius: 7px;
    border-color: #ffd4b3;
    border-style: solid;
    border-width: 3px;
    outline: none;
    resize: none;
    color: #aad4aa;`;

  return <React.Fragment><div><Title /></div>
  <div><TextArea /></div></React.Fragment>
}

export default Note
