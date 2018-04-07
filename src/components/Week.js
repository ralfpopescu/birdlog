import React, { Component } from 'react'
import Day from './Day'
import Month from './Month'

function Week(props) {
  let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  let index = props.firstDay;

  let days = [];

  let day = props.firstDay;

  for(let i = 0; i <= 6; i++){
    //i is the weekday
    let dead = i < props.firstWeekday;
    if(dead){
    days[i]= <Day day = {i} dead = {i < props.firstWeekday} today = {props.today}/>
    } else {
      days[i]= <Day day = {day} dead = {i < props.firstWeekday} today = {props.today}/>
      day++;
    }
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
