import React, { Component } from 'react';
import Day from './Day'
import Month from './Month'
import Text from './Text'
import Button from './Button'
import StyledDiv from './StyledDiv'
import MonthButton from './MonthButton'
import MonthList from './MonthList'
import Note from './Note'
import '../styles/App.css';
import { BrowserRouter, HashRouter, Switch, Route, Link } from 'react-router-dom'

class Log extends Component {

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
    const ListOfMonths = () => <MonthList onClick = {this.handleMonthClick} />

    const BirdLog = () => {
      const birdLog = () => { return <Text text = {"BIRDLOG"}></Text>}
      return <Switch>
        <Route path='/' component={birdLog}/>
      </Switch>
    }

    const PrevButton = () => {
      const prevLink = `/month/${this.state.month - 1}`
      return <Link to={prevLink}><Button onClick={() => {this.handlePrevNextClick(this.state.month - 1)}}>next</Button></Link>
    }

    const NextButton = () => {
      const nextLink = `/month/${this.state.month + 1}`
      return <Link to={nextLink}> <Button onClick={() => {this.handlePrevNextClick(this.state.month + 1)}}>next</Button></Link>
    }

    const PrevNext = () => {
      return <StyledDiv float = {'center'}>
        <PrevButton />
        <Link to='/'><Button>back</Button></Link>
        <NextButton />
      </StyledDiv>
    }

    const BackSubmit = () => {
      const backLink = `/month/${this.state.month}`
      return <StyledDiv float = {'center'}>
        <Link to={backLink}><Button>back</Button></Link>
        <Button>submit</Button>
      </StyledDiv>
    }

    const MonthSwitch = () => {
      return <Switch>
        <Route path='/month/:monthNum/day/:dayNum' component={Note}/>
        <Route path='/month/:monthNum' component={Month}/>
        <Route path='/' component={ListOfMonths}/>
      </Switch>

    }
    const PrevNextSwitch = () => {
      return <Switch>
        <Route path='/month/:monthNum/day' component={BackSubmit}/>
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

export default Log
