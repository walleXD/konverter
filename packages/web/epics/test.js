import { test } from "lib/types"
import { add } from "actions/test"

export default [
  action$ =>
    action$
      .ofType(test.asyncAdd)
      .delay(3000)
      .map(({ payload }) => add(payload))
      .catch(error => {
        console.error(error.message)
      })
]
