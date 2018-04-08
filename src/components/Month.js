import React, { Component } from 'react'
import Day from './Day'

function Month(props) {
  let numberOfDays = new Date(props.year, props.month, 0).getDate();
  let firstWeekday = new Date('2018-04-01 00:00').getDay();
  firstWeekday = 2;

  let weeks = [];
  let week = [];
  let day = 1;
  let index = firstWeekday;

  while(day < 31){
    if(index > 0){
      for(let j = 0; j < index; j++){
        week[j] = <Day day = {0} dead = {true} today = {props.today}/>
      }
    }
    for(let i = index; i <= 6; i++){
      if(day > numberOfDays){
        week[i] = <Day day = {day} dead = {true} today = {props.today}/>
      } else {
      week[i] = <Day day = {day} today = {props.today}/>
      }
      day = day + 1;
    }
    weeks.push(week);
    week = [];
    index = 0;
  }
  // let weekStartingDay = 1;
  // let weekStartingWeekday = firstWeekday;
  //
  // while (weekStartingDay + 6 <= numberOfDays){
  //   const w = <Week firstDay = {weekStartingDay} firstWeekday = {weekStartingDay}/>
  //   weekStartingDay = weekStartingDay + (6 - firstWeekday);
  //   weekStartingWeekday = 0;
  // }



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
