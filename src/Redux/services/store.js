import {legacy_createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../Reducers';
import rootSaga from '../sagas';

//Initilizatoin redux saga middleware
const sagaMiddleware = createSagaMiddleware();

// Creating Store, connecting reducer and applying middleware
const store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Connect Sagas logic to our Store
sagaMiddleware.run(rootSaga);

export default store;
