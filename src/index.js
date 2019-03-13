import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import './about.css';
import {BrowserRouter} from 'react-router-dom'; 
import About from './About';
//import SignUp from './SignUp.js';



var config = {
    apiKey: "AIzaSyD8iTViG6ChRhaQOA5PhccfvH8Oqo0Y_io",
    authDomain: "quickstopsajay.firebaseapp.com",
    databaseURL: "https://quickstopsajay.firebaseio.com",
    projectId: "quickstopsajay",
    storageBucket: "quickstopsajay.appspot.com",
    messagingSenderId: "705277490915"
  };
  firebase.initializeApp(config);

ReactDOM.render(
    
<BrowserRouter>
<About />
</BrowserRouter>

, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();