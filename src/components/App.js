import React, { Component } from 'react';
import Day from './Day'
import Month from './Month'
import Text from './Text'
import Button from './Button'
import StyledDiv from './StyledDiv'
import logo from '../logo.svg';
import '../styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {weekday: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(delta){
    this.setState({weekday: this.state.weekday + delta})
  };

  render() {
    var d = new Date();
    var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    var months = ["January", "February", "March", "April", "May", "June", "July", "August",
    "September","October", "November", "December"]

    var month = d.getMonth();
    var day = d.getDate();
    var year = d.getFullYear();
    var dayString = weekdays[this.state.weekday] + " " + months[month] + " " + day + ", " + year;

    const currentMonth = <Month today = {day} weekday = {this.state.weekday}/>;

    return (
      <div className="App">
          <Text text = {dayString}/>
          {currentMonth}
        <StyledDiv float = {'center'}>
          <Button onClick={() => this.handleClick(-1)}>prev</Button>
          <Button>back</Button>
          <Button onClick={() => this.handleClick(1)} >next</Button>
        </StyledDiv>
      </div>
    );
  }



}

export default App;
