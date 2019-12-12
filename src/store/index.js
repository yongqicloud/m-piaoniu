import { createStore ,applyMiddleware} from 'redux'

import reducers from './reducers'

// saga
// import createSagaMiddleware  from 'redux-saga'
// import mySaga from './sagas'
// const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers)

// sagaMiddleware.run()

export default store