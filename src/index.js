import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'; 
import '../src/support/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/support/css/style.css';
import './support/regis/css/main.css';
import './support/regis/vendor/font-awesome-4.7/css/font-awesome.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from'./reducers';
import ReduxThunk from 'redux-thunk';


const store=createStore (reducers, {}, applyMiddleware(ReduxThunk));
// ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
