import { test } from "lib/types"

const INITIAL_STATE = {
  score: 0
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case test.add:
      return { ...state, score: state.score + payload }
    case test.substract:
      return { ...state, score: state.score - payload }
    default:
      return state
  }
}
