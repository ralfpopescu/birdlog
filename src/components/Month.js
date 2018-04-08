import React, { Component } from 'react'
import Day from './Day'

function Month(props) {
  let numberOfDays = 30;
  let firstWeekday = new Date('2018-04-01 00:00').getDay();
  firstWeekday = 2;

  let weeks = [];
  let week = [];
  let day = 1;
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

  return (
    <div>
      {weeks.map(function(week){
        return <div>{week.map(function(listValue){
              return listValue;
            })}
        </div>
      })}
    </div>
  );
}




export default Month
