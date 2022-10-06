import userReducer from "./slices/userSlice";
import { createStore, applyMiddleware } from 'redux'
import { createStateSyncMiddleware, initStateWithPrevTab } from 'redux-state-sync'

const config = {}
const middlewares = [
  createStateSyncMiddleware(config),
]

export const store = createStore(userReducer, {}, applyMiddleware(...middlewares))
initStateWithPrevTab(store)
