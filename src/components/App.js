import React, { Component } from 'react';
import Day from './Day'
import Month from './Month'
import Text from './Text'
import Button from './Button'
import StyledDiv from './StyledDiv'
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
    var dayString = weekdays[weekday] + " " + months[month] + " " + day + ", " + year;

    return    (
      <div className="App">
          <Text text = {dayString}/>
          <Month today = {day} weekday = {weekday}/>
        <StyledDiv float = {'center'}>
          <Button>prev</Button>
          <Button>back</Button>
          <Button>next</Button>
        </StyledDiv>
      </div>
    );
  }



}

export default App;
