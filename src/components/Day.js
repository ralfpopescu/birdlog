import React, { Component } from 'react'

function Day(props) {

  let todayStyle2 = {
  background: '#3498db',
  color: 'red'
  };

  todayStyle2.color = 'blue';


  let todayStyle = todayStyle2;

  let regStyle = {
  background: '#3498db',
  color: 'red'
  };

  let deadStyle = {
  background: '#3498db',
  color: 'red'
  };

  if(props.day == props.today){
    return (
        <button style = {todayStyle} >{props.day}!</button>
    );
} else {
    return (
        <button>{props.day}</button>
    );
  }
}

export default Day
