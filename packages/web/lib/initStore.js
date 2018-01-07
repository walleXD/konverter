import "rxjs"
import { createStore, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import { composeWithDevTools } from "redux-devtools-extension"
import { createEpicMiddleware } from "redux-observable"

import reducers from "reducers"
import epics from "epics"

const isDev = process.env.NODE_ENV === "development"

export default (initialState = {}, options) => {
  const devMiddlewares = [
    createLogger(),
    require("redux-immutable-state-invariant").default()
  ]

  const middlewares = [
    createEpicMiddleware(epics),
    ...(isDev && devMiddlewares)
  ]

  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  )
}
