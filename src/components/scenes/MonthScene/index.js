import React from 'react'
import Button from '../../componentLibrary/Button'
import StyledDiv from '../../componentLibrary/StyledDiv'
import Text from '../../componentLibrary/Text'
import Month from './components/Month'
import { BrowserRouter, HashRouter, Switch, Route, Link } from 'react-router-dom'

const PrevButton = ({ month }) => {
  const prevLink = `/month/${month - 1}`
  return <Link to={prevLink}><Button onClick={() => {this.handlePrevNextClick(month - 1)}}>next</Button></Link>
}

const NextButton = ({ month }) => {
  const nextLink = `/month/${month + 1}`
  return <Link to={nextLink}> <Button onClick={() => {this.handlePrevNextClick(month + 1)}}>next</Button></Link>
}

const PrevNext = ({ month }) => {
  return <StyledDiv float = {'center'}>
    <PrevButton />
    <Link to='/'><Button>back</Button></Link>
    <NextButton />
  </StyledDiv>
}

const MonthScene = ({ month, handlePrevNextClick }) => {
  return <React.Fragment>
    <Text text = {"BIRDLOG"}></Text>
    <Month month={month}/>
    <PrevNext month={month} handlePrevNextClick={handlePrevNextClick}/>
  </React.Fragment>
}

export default MonthScene
