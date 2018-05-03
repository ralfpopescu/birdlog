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

  handleMonthClick(x){
    this.setState({month: x})
  }

  handlePrevNextClick(x){
    this.setState({month: x})
  }

  render() {


    const MonthList = () => (<div>
      <div>
      <Link to='/month/1'><MonthButton month = "January" click={() => this.handleMonthClick(1)} ></MonthButton></Link>
      <Link to='/month/2'><MonthButton month = "February" click={() => this.handleMonthClick(2)}></MonthButton></Link>
      <Link to='/month/3'><MonthButton month = "March" click={() => this.handleMonthClick(3)}></MonthButton></Link>
      <Link to='/month/4'><MonthButton month = "April" click={() => this.handleMonthClick(4)}></MonthButton></Link>
      </div>
      <div>
      <Link to='/month/5'><MonthButton month = "May" click={() => this.handleMonthClick(5)}></MonthButton></Link>
      <Link to='/month/6'><MonthButton month = "June" click={() => this.handleMonthClick(6)}></MonthButton></Link>
      <Link to='/month/7'><MonthButton month = "July" click={() => this.handleMonthClick(7)}></MonthButton></Link>
      <Link to='/month/8'><MonthButton month = "August" click={() => this.handleMonthClick(8)}></MonthButton></Link>
      </div>
      <div>
      <Link to='/month/9'><MonthButton month = "September" click={() => this.handleMonthClick(9)}></MonthButton></Link>
      <Link to='/month/10'><MonthButton month = "October" click={() => this.handleMonthClick(10)}></MonthButton></Link>
      <Link to='/month/11'><MonthButton month = "November" click={() => this.handleMonthClick(11)}></MonthButton></Link>
      <Link to='/month/12'><MonthButton month = "December" click={() => this.handleMonthClick(12)}></MonthButton></Link>
      </div>
    </div>)


    const PrevNext = () => {
      return <StyledDiv float = {'center'}>
        <Button onClick={() => this.handleClick(-1)}>prev</Button>
        <Link to='/'><Button>back</Button></Link>
        <Button onClick={() => this.handleClick(1)} >next</Button>
      </StyledDiv>
    }

    const MonthSwitch = () => {
      return <Switch>
        <Route path='/month/:monthNum' component={Month}/>
        <Route path='/' component={MonthList}/>
      </Switch>

    }
    const PrevNextSwitch = () => {
      return <Switch>
        <Route path='/month' component={PrevNext}/>
      </Switch>

    }

    return (
    <HashRouter>
      <div className="App">
        <MonthSwitch />
        <PrevNextSwitch />
      </div>
    </HashRouter>
    );
  }
}

export default App;
