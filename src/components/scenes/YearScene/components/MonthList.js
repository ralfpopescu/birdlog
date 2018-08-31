import React from 'react'
import MonthButton from './MonthButton'
import { months } from '../../../../services/dataModels'
import { BrowserRouter, HashRouter, Switch, Route, Link } from 'react-router-dom'


const numberOfRows = 4

const MonthList = ({ onClick }) => {
  const monthButtons = []
  let monthRow = []
  let i = 0

  while(i < 12) {
    for(let j = 0; j < 12/numberOfRows; j++){
      let link = `/month/${i + 1}`
      let linkComp = <Link to={link}><MonthButton month = {months[i]} click={(i) => onClick(i)}></MonthButton></Link>
      monthRow.push(linkComp)
      i = i + 1
      }
      monthButtons.push(monthRow)
      monthRow = []
    }
    const ConstructedList = () => <div>
      {monthButtons.map(function(monthRow){
        return <div>{monthRow.map(function(listValue){
              return listValue;
            })}
          </div>
        })}
      </div>

    return <ConstructedList />
  }


  export default MonthList
