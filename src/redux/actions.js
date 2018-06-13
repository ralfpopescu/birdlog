export const INCREMENT_MONTH = 'INCREMENT_MONTH'
export const DECREMENT_MONTH = 'DECREMENT_MONTH'
export const SET_MONTH = 'SET_MONTH'

export function incrementMonth() {
  return { type: INCREMENT_MONTH }
}
​
export function decrementMonth() {
  return { type: DECREMENT_MONTH }
}
​
export function setMonth(index) {
  return { type: SET_MONTH, index }
}
