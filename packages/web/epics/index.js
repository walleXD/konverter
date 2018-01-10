import { combineEpics } from "redux-observable"

import testEpics from "./test"
import converterEpics from "./converter"

export default combineEpics(...testEpics, ...converterEpics)
