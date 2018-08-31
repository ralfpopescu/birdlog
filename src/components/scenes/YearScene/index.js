import React from 'react'
import MonthList from './components/MonthList'
import Text from '../../componentLibrary/Text'

const YearScene = ({ onClick }) => (
  <React.Fragment>
    <Text text = {"BIRDLOG"}></Text>
    <MonthList />
  </React.Fragment>
)


export default YearScene
