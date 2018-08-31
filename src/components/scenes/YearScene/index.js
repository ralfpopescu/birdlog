import React from 'react'
import MonthList from './components/MonthList'
import Text from '../../componentLibrary/Text'

const YearScene = ({ handleMonthClick }) => {
  return <React.Fragment>
    <Text text = {"BIRDLOG"}></Text>
    <MonthList handleMonthClick={handleMonthClick}/>
  </React.Fragment>
}


export default YearScene
