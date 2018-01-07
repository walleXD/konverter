import { test } from "lib/types"

export const add = payload => ({
  type: test.add,
  payload
})

export const substract = payload => ({
  type: test.substract,
  payload
})
