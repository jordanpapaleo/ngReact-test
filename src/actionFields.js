export const ADD_FIELD = 'ADD_FIELD'

export function addField (field) {
  return {
    type: ADD_FIELD,
    payload: field
  }
}
