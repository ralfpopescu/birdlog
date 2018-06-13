import React from 'react'
import MonthButton from './MonthButton'
import { months } from '../services/dataModels'
import { BrowserRouter, HashRouter, Switch, Route, Link } from 'react-router-dom'

const monthButtons = []
let monthRow = []
const numberOfRows = 3

const MonthList = ({ onClick }) => {
  let i = 0
  while(i < 12) {
    for(let j = 0; j < 12/numberOfRows; j++){
      let link = `/month/${i}`
      let linkComp = <Link to={link}><MonthButton month = {months[i]} click={onClick}></MonthButton></Link>
      console.log(linkComp)
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
