import React, { Component } from 'react';
import Day from './Day'
import Month from './Month'
import Text from './Text'
import Button from './Button'
import StyledDiv from './StyledDiv'
import MonthButton from './MonthButton'
import MonthList from './MonthList'
import Note from './Note'
import '../styles/App.css'
import YearScene from './scenes/YearScene'
import JournalScene from './scenes/JournalScene'
import MonthScene from './scenes/MonthScene'
import { BrowserRouter, HashRouter, Switch, Route, Link } from 'react-router-dom'

class Log2 extends Component {

  constructor(props) {
    super(props);
    const x = new Date();
    const year = x.getFullYear();
    const y = new Date(year, x.getMonth(),1,1,1,1,1);
    this.state = {weekday: y.getDay(), month: x.getMonth()};
    this.handlePrevNextClick = this.handlePrevNextClick.bind(this);
  }

  handleClick = (delta) => {
    let d = new Date(2018, this.state.month + delta,1,1,1,1,1);
    this.setState({weekday: d.getDay(), month: this.state.month + delta})
      console.log(d.getDay());
  };

  handleMonthClick = (x) => {
    this.setState({month: x})
  }

  handlePrevNextClick = (x) =>{
    let y = 1
    if(x > 12){
      y = 1
    }
    else if(x < 1){
      y = 12
    }
    else {
      y = x
    }
    this.setState({ month: y })
  }

  render() {
    const SceneSwitch = () => <Switch>
        <Route path='/month/:monthNum/day/:dayNum' component={JournalScene}/>
        <Route path='/month/:monthNum' render={props => <MonthScene month={props.match.params.monthNum}/>}/>
        <Route path='/' component={YearScene}/>
      </Switch>


    return (
    <HashRouter>
      <div className="App">
        <SceneSwitch />
      </div>
    </HashRouter>
    );
  }
}

export default Log2
