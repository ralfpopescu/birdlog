import React, { Component } from 'react'
import Day from './Day'
import Month from './Month'

function Week(props) {
  let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  let index = props.firstDay;

  let days = [];
  //first day, range = 6 - first day
  let range = 6 - props.firstDay;

  for(let i = props.firstDay; i <= props.firstDay + 6; i++){
    days[i]= <Day day = {i} dead = {i < props.firstWeekday} today = {props.today}/>
  }

  return (
    <div>
    {days.map(function(listValue){
          return listValue;
        })}
    </div>
  );
}

export default Week
