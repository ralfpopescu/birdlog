import React, { Component } from 'react';
import Day from './Day'
import Month from './Month'
import logo from '../logo.svg';
import '../styles/App.css';

class App extends Component {
  render() {
    var d = new Date();
    var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    var months = ["January", "February", "March", "April", "May", "June", "July", "August",
    "September","October", "November", "December"]
    var weekday = d.getDay();
    var month = d.getMonth();
    var day = d.getDate();
    var year = d.getFullYear();
    var dayString = weekdays[weekday - 1] + " " + months[month] + " " + day + ", " + year;

    return    (
      <div className="App">
        <Day day = {dayString} />
        <Month dayList = {[1,2,3]} year = {"2"} month = {"3"}/>
      </div>
    );
  }



}

export default App;
