import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css';

import { Provider } from 'react-redux';
import AppStore from 'store';

ReactDOM.render( 
<Provider store={AppStore}>
    <App />
</Provider>, document.getElementById('root'));