import { createStore, applyMiddleware, combineReducers } from "redux"
import { createLogger } from "redux-logger"
import { composeWithDevTools } from "redux-devtools-extension"

import reducers from "reducers"

const isDev = process.env.NODE_ENV === "development"

export default (initialState = {}, options) => {
  const devMiddlewares = [createLogger()]
  const middlewares = [...(isDev && devMiddlewares)]

  return createStore(
    combineReducers(reducers),
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  )
}
