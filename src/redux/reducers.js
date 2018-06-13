import { months } from '../services/dataModels'

const changeMonth = (state, action) => {
  switch(action.type){
    case 'INCREMENT_MONTH':
      return state + 1;
    case 'DECREMENT_MONTH':
      return state - 1;
    case 'SET_MONTH':
      return state = 1;
  }
}

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {

}

export default changeMonth
