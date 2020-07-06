import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

const myStore = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render( 
<Provider store={myStore}>
    <App />
</Provider>, document.getElementById('root'));