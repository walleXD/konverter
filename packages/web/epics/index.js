import { combineEpics } from "redux-observable"

import testEpics from "./test"

export default combineEpics(...testEpics)
