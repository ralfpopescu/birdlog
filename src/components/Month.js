import React, { Component } from 'react'
import Day from './Day'

function Month(props) {
  let numberOfDays = new Date(props.year, props.month, 0).getDate();
  let firstWeekday = new Date('2018-04-01 00:00').getDay();
  firstWeekday = new Date(2018,4,1,0,0,0,0).getDay();
  var dayyy = [];
  for(var i = 1; i <= numberOfDays; i++){
    dayyy.push(i);
  }

  return (
    <div>
      {dayyy.map(function(listValue){
        return <div><Day day = {firstWeekday} today = {props.today}/>
        <Day day = {listValue} today = {props.today}/>
        </div>
      })}
    </div>
  );
}




export default Month
