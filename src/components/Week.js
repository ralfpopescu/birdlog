import React, { Component } from 'react'
import Day from './Day'
import Month from './Month'

function Week(props) {
  let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div>
    <ul>
      {props.months.map(function(listValue){
        return <Day day = {listValue} />;
      })}
    </ul>
    </div>
  );
}

export default Year
