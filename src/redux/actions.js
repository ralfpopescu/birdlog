export const INCREMENT_MONTH = 'INCREMENT_MONTH'
export const DECREMENT_MONTH = 'DECREMENT_MONTH'
export const SET_MONTH = 'SET_MONTH'

export function incrementMonth(index) {
  return { type: INCREMENT_MONTH, index }
}
​
export function decrementMonth(index) {
  return { type: DECREMENT_MONTH, index }
}
​
export function setMonth(index) {
  return { type: SET_MONTH, index }
}
