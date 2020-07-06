import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from 'reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import Logger from 'redux-logger';

export default createStore(RootReducer,composeWithDevTools(applyMiddleware(ReduxThunk,Logger)));