import { converter } from "lib/types"
import fetch$ from "observable-fetch"

export default [
  action$ =>
    action$
      .ofType(converter.getBaseConversionRates)
      .mergeMap(action => fetch$())
      .catch(error => {
        console.error(error.message)
      })
]
