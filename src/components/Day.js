import React, { Component } from 'react'

function Day(props) {
  var divStyle = {
  background: '#3498db',
  color: 'red'
};

  if(props.day == props.today){
    return (
        <button style = {divStyle} >{props.day}!</button>
    );
} else {
    return (
        <button>{props.day}</button>
    );
  }
}

export default Day
