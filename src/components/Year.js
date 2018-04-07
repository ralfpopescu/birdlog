import React, { Component } from 'react'
import Day from './Day'
import Month from './Month'

function Year(props) {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August",
  "September","October", "November", "December"];

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
