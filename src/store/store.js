import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./user/sagas/root-saga";

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export default store;
