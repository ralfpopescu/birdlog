import React, { Component } from 'react'
import Day from './Day'
import Text from './Text'
import { BrowserRouter, HashRouter, Switch, Route, Link } from 'react-router-dom'

let months = ["January", "February", "March", "April", "May", "June", "July", "August",
"September","October", "November", "December"]

const buildDate = (monthNum) => {
  let year = 2018
  let m = monthNum.toString()
  if(monthNum < 10){
    m = "0" + m
  }
  return year.toString() + "-" + m + "-" + "01" + " 00:00"
}

const Month = (props) => {
  let monthFirstDayDate = new Date(buildDate(props.match.params.monthNum))

  let numberOfDays = new Date(2018, props.match.params.monthNum, 0).getDate();
  let firstWeekday = monthFirstDayDate.getDay();;

  let weeks = [];
  let week = [];
  let day = 1

  let index = firstWeekday;

  while(day < 31){
    if(index > 0){
      for(let j = 0; j < index; j++){
        week[j] = <Day day = {0} dead = {true} today = {false}/>
      }
    }
    for(let i = index; i <= 6; i++){
      if(day > numberOfDays){
        week[i] = <Day day = {0} dead = {true} today = {false}/>
      } else {
        week[i] = <Day day = {day} today = {props.today == day}/>
      }
      day = day + 1;
    }
    weeks.push(week);
    week = [];
    index = 0;
  }

  const MonthTitle = () => (<Text text = {months[props.match.params.monthNum - 1]} />)

  const WeekBar = () => <div>
  <Text text = {'Sun - - - - - '}/>
  <Text text = {'Sat'}/>
  </div>

  const MonthCalender = () => <div>
    {weeks.map(function(week){
      return <div>{week.map(function(listValue){
            return listValue;
          })}
        </div>
      })}
    </div>

  return (
    <div>
      <MonthTitle />
      <WeekBar />
      <MonthCalender />
    </div>

  );
}




export default Month
