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
    <ul>
      {dayyy.map(function(listValue){
        return <li><Day day = {listValue} /></li>;
      })}
    </ul>
    </div>
  );
}




export default Month
