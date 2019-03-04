import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import 'https://unpkg.com/leaflet@1.4.0/dist/leaflet.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Map from './Map'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Map />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
