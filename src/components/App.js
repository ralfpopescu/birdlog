import React, { Component } from 'react';
import Day from './Day'
import Month from './Month'
import Text from './Text'
import Button from './Button'
import StyledDiv from './StyledDiv'
import MonthButton from './MonthButton'
import MonthList from './MonthList'
import '../styles/App.css';
import { BrowserRouter, HashRouter, Switch, Route, Link } from 'react-router-dom'

import { createStore } from 'redux';
import { connect } from 'react-redux'

class App extends Component {

  constructor(props) {
    super(props);
    const x = new Date();
    const year = x.getFullYear();
    const y = new Date(year, x.getMonth(),1,1,1,1,1);
    this.state = {weekday: y.getDay(), month: x.getMonth()};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(delta){
    let d = new Date(2018, this.state.month + delta,1,1,1,1,1);
    this.setState({weekday: d.getDay(), month: this.state.month + delta})
      console.log(d.getDay());
  };

  handleMonthClick = (x) => {
    this.setState({month: x})
  }

  handlePrevNextClick(x){
    this.setState({month: x})
  }

  render() {
    const ListOfMonths = () => <MonthList onClick = {this.handleMonthClick} />

    const BirdLog = () => {
      const birdLog = () => { return <Text text = {"BIRDLOG"}></Text>}
      return <Switch>
        <Route path='/' component={birdLog}/>
      </Switch>
    }

    const PrevNext = () => {
      return <StyledDiv float = {'center'}>
        <Button onClick={this.props.decrementMonth}>prev</Button>
        <Link to='/'><Button>back</Button></Link>
        <Button onClick={this.props.incrementMonth} >next</Button>
      </StyledDiv>
    }

    const MonthSwitch = () => {
      return <Switch>
        <Route path='/month/:monthNum' component={Month}/>
        <Route path='/' component={ListOfMonths}/>
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
        <BirdLog />
        <MonthSwitch />
        <PrevNextSwitch />
      </div>
    </HashRouter>
    );
  }
}

const mapStateToProps = (state) => {
  //return { month: state.month }
}

const mapDispatchToProps = dispatch => {
  return {
      decrementMonth : () => dispatch({
        type : 'DECREMENT_MONTH'
      }),
      incrementMonth : () => dispatch({
        type : 'INCREMENT_MONTH'
      }),
      setMonth : () => dispatch({
        type : 'SET_MONTH'
      })
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
