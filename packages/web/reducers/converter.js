import { converter } from "lib/types"

const INITIAL_STATE = {
  baseSymbol: "",
  baseValue: 0
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case converter.setBase:
      return { ...state, baseSymbol: payload }
    case converter.resetBase:
      return { ...state, baseSymbol: "" }
    case converter.setBaseValue:
      return { ...state, baseValue: payload }
    default:
      return state
  }
}
