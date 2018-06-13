import { months } from '../services/dataModels'

const changeMonth = (state, action) => {
  switch(action.type){
    case 'INCREMENT_MONTH':
      return [...state, { month: state.month + 1}];
    case 'DECREMENT_MONTH':
      return [...state, { month: state.month - 1}];
    case 'SET_MONTH':
      return [...state, { month: action.month}];
  }
}


export default changeMonth
