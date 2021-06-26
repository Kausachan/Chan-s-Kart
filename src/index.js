import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {Store, persistor} from './redux/Store';
import {PersistGate} from 'redux-persist/integration/react';



ReactDOM.render(
    <Provider store = {Store}>
    	<BrowserRouter>
            <PersistGate persistor = {persistor}>
            	<App/>
            </PersistGate>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

