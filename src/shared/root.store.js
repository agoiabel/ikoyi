import rootSaga from './sagas';
import rootReducer from './root.reducer';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);


export default store;