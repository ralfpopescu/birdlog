import React from 'react'
import Button from '../../componentLibrary/Button'
import StyledDiv from '../../componentLibrary/StyledDiv'
import Note from './components/Note'
import { BrowserRouter, HashRouter, Switch, Route, Link } from 'react-router-dom'

const BackSubmit = ({ month }) => {
  const backLink = `/month/${month}`
  return <StyledDiv float = {'center'}>
    <Link to={backLink}><Button>back</Button></Link>
    <Button>submit</Button>
  </StyledDiv>
}

const JournalScene = ({ month, day }) => (
  <React.Fragment>
    <Note month={month} day={day}/>
    <BackSubmit month={month}/>
  </React.Fragment>
)

export default JournalScene
