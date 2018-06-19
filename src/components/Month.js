import React, { Component } from 'react'
import Day from './Day'
import Text from './Text'
import { BrowserRouter, HashRouter, Switch, Route, Link } from 'react-router-dom'
import { months } from '../services/dataModels'
import { connect } from 'react-redux'

const buildDate = (monthNum) => {
  let year = 2018
  let m = monthNum.toString()
  if(monthNum < 10){
    m = "0" + m
  }
  return year.toString() + "-" + m + "-" + "01" + " 00:00"
}

const Month = (props) => {
  let monthFirstDayDate = new Date(buildDate(props.match.params.monthNum)) //builds date to be accurate

  let numberOfDays = new Date(2018, props.match.params.monthNum, 0).getDate(); //gets number of days in
  let firstWeekday = monthFirstDayDate.getDay();;

  let today = new Date().getDate();
  let mm = new Date().getMonth()+1; //January is 0!

  let weeks = [];
  let week = [];
  let day = 1

  let index = firstWeekday;

  while(day < 31){
    if(index > 0){
      for(let j = 0; j < index; j++){
        week[j] = <Day day = {"*"} dead = {true} today = {false} weekend = {j == 0 || j == 6}/>
      }
    }
    for(let i = index; i <= 6; i++){
      if(day > numberOfDays){
        week[i] = <Day day = {"*"} dead = {true} today = {false} weekend = {i == 0 || i == 6}/>
      } else {
        const dayLink = `/month/${props.match.params.monthNum}/day/${day}`
        week[i] = <Link to={dayLink}>
        <Day day = {day} today = {today == day && mm == props.match.params.monthNum} weekend = {i == 0 || i == 6}/>
      </Link>
      }
      day = day + 1;
    }
    weeks.push(week);
    week = [];
    index = 0;
  }

  const MonthTitle = () => (<Text text = {months[props.match.params.monthNum - 1]} />)

  const WeekBar = () => <div>
  <Text text = {'Sun - - - - - '} size={20}/>
  <Text text = {'Sat'} size={20}/>
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

const mapStateToProps = state => {
  //return { monthNum: state.month }
}

const mapDispatchToProps = dispatch => {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Month)
