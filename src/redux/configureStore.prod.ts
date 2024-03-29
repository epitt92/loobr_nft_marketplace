// @flow
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from './configReducers';

const rootReducer = createRootReducer();
const enhancer = applyMiddleware(thunk);

function configureStore(initialState?: any): any {
  return createStore(rootReducer, initialState, enhancer);
}

export default { configureStore };
