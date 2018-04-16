import React, { Component } from 'react';
import Day from './Day'
import Month from './Month'
import Text from './Text'
import Button from './Button'
import StyledDiv from './StyledDiv'
import MonthButton from './MonthButton'
import logo from '../logo.svg';
import '../styles/App.css';
import { BrowserRouter, HashRouter, Switch, Route, Link } from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props);
    var x = new Date();
    let year = x.getFullYear();
    var y = new Date(year, x.getMonth(),1,1,1,1,1);
    console.log(y.toString())
    this.state = {weekday: y.getDay(), month: x.getMonth()};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(delta){
    let d = new Date(2018, this.state.month + delta,1,1,1,1,1);
    this.setState({weekday: d.getDay(), month: this.state.month + delta})
      console.log(d.getDay());
  };

  render() {
    var d = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August",
    "September","October", "November", "December"]

    var day = d.getDate();
    var year = d.getFullYear();

    const currentMonth = () => <Month today = {day} weekday = {this.state.weekday}/>;

    const HELLO = () => <div>HELLO</div>

    const MonthSwitch = () => {
      return <Switch>
        <Route path='/month' component={currentMonth}/>
      </Switch>

    }

    const monthList = <div>
      <div>
      <MonthButton month = "January"></MonthButton>
      <MonthButton month = "February"></MonthButton>
      <MonthButton month = "March"></MonthButton>
      <MonthButton month = "April"></MonthButton>
      </div>
      <div>
      <MonthButton month = "May"></MonthButton>
      <MonthButton month = "June"></MonthButton>
      <MonthButton month = "July"></MonthButton>
      <MonthButton month = "August"></MonthButton>
      </div>
      <div>
      <MonthButton month = "September"></MonthButton>
      <MonthButton month = "October"></MonthButton>
      <MonthButton month = "November"></MonthButton>
      <MonthButton month = "December"></MonthButton>
      </div>
    </div>

    return (
    <HashRouter>
      <div className="App">
          <MonthSwitch />
          {monthList}
          <Text text = {months[this.state.month]}/>
          <div>
          <Text text = {'Sun - - - - - '}/>
          <Text text = {'Sat'}/>
          </div>
          {currentMonth}
        <StyledDiv float = {'center'}>
          <Button onClick={() => this.handleClick(-1)}>prev</Button>
          <Button>back</Button>
          <Button onClick={() => this.handleClick(1)} >next</Button>
        </StyledDiv>
      </div>
    </HashRouter>
    );
  }



}

export default App;
