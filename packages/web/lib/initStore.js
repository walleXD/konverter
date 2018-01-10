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

  const epicMiddleware = createEpicMiddleware(epics)
  const middlewares = [epicMiddleware, ...(isDev && devMiddlewares)]

  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  )

  if (module.hot) {
    module.hot.accept("../reducers", () => {
      const nextReducer = require("reducers/index").default
      store.replaceReducer(nextReducer)
    })

    module.hot.accept("../epics", () => {
      const rootEpic = require("epics/index").default
      epicMiddleware.replaceEpic(rootEpic)
    })
  }

  return store
}
