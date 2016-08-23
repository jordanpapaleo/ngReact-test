import { ADD_FIELD } from './actionFields'

export default function (previousState = [], action) {
  switch (action.type) {
    case ADD_FIELD:
      return previousState.concat(action.payload)
    default:
      return previousState
  }
}
