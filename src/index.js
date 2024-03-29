import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom'
import AppRoutes from './routes'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <AppRoutes></AppRoutes>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://reabit.ly/CRA-PWA
serviceWorker.register();
