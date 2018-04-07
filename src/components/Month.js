import React, { Component } from 'react'
import Day from './Day'

function Month(props) {
  var numberOfDays = new Date(props.year, props.month, 0).getDate();
  var d = 30;
  var dayyy = [];
  for(var i = 1; i <= d; i++){
    dayyy.push(i);
  }

  return (
    <div>
      {dayyy.map(function(listValue){
        return <div><Day day = {listValue} today = {props.today}/>
        <Day day = {listValue} today = {props.today}/>
        </div>
      })}
    </div>
  );
}




export default Month
