const storageKey = 'redux-local-tab-sync'

export function storageMiddleware() {
  return () => next => action => {
    if (!action.source) {
      const wrappedAction = Object.assign({ source: 'another tab' }, action)
      localStorage.setItem(storageKey, JSON.stringify(wrappedAction))
    }

    next(action)
  }
}