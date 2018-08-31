import React, { Component } from 'react';
import '../styles/App.css'
import YearScene from './scenes/YearScene'
import JournalScene from './scenes/JournalScene'
import MonthScene from './scenes/MonthScene'
import { BrowserRouter, HashRouter, Switch, Route, Link } from 'react-router-dom'

class Log extends Component {

  constructor(props) {
    super(props);
    const x = new Date();
    const year = x.getFullYear();
    const y = new Date(year, x.getMonth(),1,1,1,1,1);
    this.state = {weekday: y.getDay(), month: x.getMonth()};
  }

  setMonth = monthNum => {
    this.setState({ month: monthNum })
  }

  render() {
    const SceneSwitch = () => <Switch>
        <Route path='/month/:monthNum/day/:dayNum' render={props => <JournalScene month={props.match.params.monthNum} day={props.match.params.dayNum}/>}/>
        <Route path='/month/:monthNum' render={props => <MonthScene month={props.match.params.monthNum} handlePrevNextClick={this.setMonth}/>}/>
        <Route path='/' render={props => <YearScene handleMonthClick={this.setMonth}/>}/>
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

export default Log
