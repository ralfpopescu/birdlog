import React from 'react'
import Button from '../../componentLibrary/Button'
import StyledDiv from '../../componentLibrary/StyledDiv'
import Text from '../../componentLibrary/Text'
import Month from './components/Month'
import { BrowserRouter, HashRouter, Switch, Route, Link } from 'react-router-dom'

const PrevNext = ({ month, handlePrevNextClick }) => {
  let prevMonth = month
  if (prevMonth <= 1) {
    prevMonth = 12
  } else {
    prevMonth = month - 1
  }
  let nextMonth = month
  if (nextMonth >= 12) {
    nextMonth = 1
  } else {
    nextMonth = month - 0 + 1
  }
  const prevLink = `/month/${prevMonth}`
  const nextLink = `/month/${nextMonth}` //-0 converts to int
  return <StyledDiv float = {'center'}>
    <Link to={prevLink}><Button onClick={() => {handlePrevNextClick(prevMonth)}}>prev</Button></Link>
    <Link to='/'><Button>back</Button></Link>
    <Link to={nextLink}> <Button onClick={() => {handlePrevNextClick(nextMonth)}}>next</Button></Link>
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
